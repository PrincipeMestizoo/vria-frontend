import { Component, DestroyRef, EventEmitter, Output, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { ReceiptService } from '../../../core/services/receipt.service';
import { RECEIPT_ACCEPTED_TYPES, RECEIPT_MAX_SIZE_BYTES, ReceiptDraftDTO } from '../../../core/models';

type Step = 'idle' | 'uploading' | 'extracting' | 'done' | 'failed';

@Component({
  selector: 'app-receipt-upload',
  templateUrl: './receipt-upload.component.html',
  styleUrl: './receipt-upload.component.scss',
})
export class ReceiptUploadComponent {
  @Output() readonly receiptChange = new EventEmitter<string | null>();
  @Output() readonly draftChange = new EventEmitter<ReceiptDraftDTO | null>();
  @Output() readonly busyChange = new EventEmitter<boolean>();

  readonly acceptedTypes = RECEIPT_ACCEPTED_TYPES.join(',');

  step: Step = 'idle';
  fileName = '';
  receiptId: string | null = null;
  draft: ReceiptDraftDTO | null = null;
  error = '';
  canRetry = false;

  private file: File | null = null;
  private request?: Subscription;
  private readonly destroyRef = inject(DestroyRef);

  constructor(private readonly receiptService: ReceiptService) {}

  get busy(): boolean {
    return this.step === 'uploading' || this.step === 'extracting';
  }

  get confidencePercent(): number | null {
    return this.draft?.confidence == null ? null : Math.round(this.draft.confidence * 100);
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    if (!file) {
      return;
    }

    this.remove();
    const problem = this.validate(file);
    if (problem) {
      this.error = problem;
      return;
    }

    this.file = file;
    this.fileName = file.name;
    this.upload();
  }

  retry(): void {
    this.error = '';
    if (this.receiptId) {
      this.extract(this.receiptId);
    } else {
      this.upload();
    }
  }

  remove(): void {
    this.request?.unsubscribe();
    this.file = null;
    this.fileName = '';
    this.error = '';
    this.draft = null;
    this.setReceipt(null);
    this.draftChange.emit(null);
    this.setStep('idle');
  }

  private upload(): void {
    if (!this.file) {
      return;
    }
    this.setStep('uploading');
    this.request = this.receiptService
      .upload(this.file)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: ({ receiptId }) => {
          this.setReceipt(receiptId);
          this.extract(receiptId);
        },
        error: (error: HttpErrorResponse) => this.fail(error, 'No fue posible subir el comprobante.'),
      });
  }

  private extract(receiptId: string): void {
    this.setStep('extracting');
    this.request = this.receiptService
      .extract(receiptId)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (draft) => {
          this.draft = draft;
          this.draftChange.emit(draft);
          this.setStep('done');
        },
        error: (error: HttpErrorResponse) => this.fail(error, 'No fue posible leer el comprobante.'),
      });
  }

  private fail(error: HttpErrorResponse, fallback: string): void {
    this.error = error.error?.message ?? fallback;
    // 413, 415 y 422 dependen del archivo: reintentar no cambia el resultado
    this.canRetry = ![403, 413, 415, 422].includes(error.status);
    this.setStep('failed');
  }

  private validate(file: File): string {
    if (file.type && !RECEIPT_ACCEPTED_TYPES.includes(file.type)) {
      return 'Formato no admitido. Usa JPG, PNG, WEBP o PDF.';
    }
    if (file.size > RECEIPT_MAX_SIZE_BYTES) {
      return 'El comprobante supera el máximo de 8 MB.';
    }
    return '';
  }

  private setReceipt(receiptId: string | null): void {
    this.receiptId = receiptId;
    this.receiptChange.emit(receiptId);
  }

  private setStep(step: Step): void {
    this.step = step;
    this.busyChange.emit(this.busy);
  }
}
