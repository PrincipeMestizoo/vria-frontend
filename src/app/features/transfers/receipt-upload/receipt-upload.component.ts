import { Component, DestroyRef, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription, from } from 'rxjs';
import { ReceiptService } from '../../../core/services/receipt.service';
import { RECEIPT_ACCEPTED_TYPES, RECEIPT_MAX_SIZE_BYTES, ReceiptDraftDTO } from '../../../core/models';
import { shrinkImage } from '../../../shared/utils/receipt-image';

type Step = 'idle' | 'preparing' | 'uploading' | 'extracting' | 'done' | 'failed';

@Component({
  selector: 'app-receipt-upload',
  templateUrl: './receipt-upload.component.html',
  styleUrl: './receipt-upload.component.scss',
})
export class ReceiptUploadComponent implements OnInit {
  /** Archivo elegido antes de abrir el formulario. */
  @Input() initialFile: File | null = null;
  /** Indica si hay una vista previa, para que el formulario acomode el diseño. */
  @Output() readonly attachedChange = new EventEmitter<boolean>();
  @Output() readonly receiptChange = new EventEmitter<string | null>();
  @Output() readonly draftChange = new EventEmitter<ReceiptDraftDTO | null>();
  @Output() readonly busyChange = new EventEmitter<boolean>();
  /** true mientras el archivo adjunto ya respalde otra transferencia. */
  @Output() readonly alreadyUsedChange = new EventEmitter<boolean>();

  step: Step = 'idle';
  fileName = '';
  previewUrl = '';
  isPdf = false;
  zoomed = false;
  receiptId: string | null = null;
  draft: ReceiptDraftDTO | null = null;
  error = '';
  canRetry = false;

  private file: File | null = null;
  private request?: Subscription;
  private readonly destroyRef = inject(DestroyRef);

  constructor(private readonly receiptService: ReceiptService) {
    this.destroyRef.onDestroy(() => this.revokePreview());
  }

  ngOnInit(): void {
    const file = this.initialFile;
    if (file) {
      // Se difiere para no cambiar el estado del formulario durante su primera detección de cambios
      queueMicrotask(() => this.attach(file));
    }
  }

  get busy(): boolean {
    return this.step === 'preparing' || this.step === 'uploading' || this.step === 'extracting';
  }

  get busyLabel(): string {
    if (this.step === 'preparing') {
      return 'Preparando imagen…';
    }
    return this.step === 'uploading' ? 'Subiendo comprobante…' : 'Leyendo con IA…';
  }

  get confidencePercent(): number | null {
    return this.draft?.confidence == null ? null : Math.round(this.draft.confidence * 100);
  }

  attach(file: File): void {
    this.remove();
    if (file.type && !RECEIPT_ACCEPTED_TYPES.includes(file.type)) {
      this.error = 'Formato no admitido. Usa JPG, PNG, WEBP o PDF.';
      return;
    }

    this.setStep('preparing');
    // Como suscripción, quitar o cambiar el archivo también cancela la preparación
    this.request = from(shrinkImage(file, RECEIPT_MAX_SIZE_BYTES))
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((prepared) => {
        if (prepared.size > RECEIPT_MAX_SIZE_BYTES) {
          this.setStep('idle');
          this.error = 'El comprobante supera el máximo de 8 MB.';
          return;
        }
        this.file = prepared;
        this.fileName = prepared.name;
        this.isPdf = prepared.type === 'application/pdf';
        this.previewUrl = URL.createObjectURL(prepared);
        this.attachedChange.emit(true);
        this.upload();
      });
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
    this.revokePreview();
    this.zoomed = false;
    this.attachedChange.emit(false);
    this.error = '';
    this.draft = null;
    this.alreadyUsedChange.emit(false);
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
        next: ({ receiptId, status }) => {
          if (status === 'USADO') {
            this.rejectAsUsed();
            return;
          }
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

  private rejectAsUsed(): void {
    this.error = 'Este comprobante ya se usó en una transferencia. Quítalo o adjunta otro.';
    this.canRetry = false;
    this.alreadyUsedChange.emit(true);
    this.setStep('failed');
  }

  private fail(error: HttpErrorResponse, fallback: string): void {
    this.error = error.error?.message ?? fallback;
    // 413, 415 y 422 dependen del archivo: reintentar no cambia el resultado
    this.canRetry = ![403, 413, 415, 422].includes(error.status);
    this.setStep('failed');
  }

  private revokePreview(): void {
    if (this.previewUrl) {
      URL.revokeObjectURL(this.previewUrl);
      this.previewUrl = '';
    }
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
