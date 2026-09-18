import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { finalize } from 'rxjs';
import { TypeCategoryService } from '../../../core/services/type-category.service';
import { NotificationService } from '../../../core/services/notification.service';
import { ConfirmDialogService } from '../../../shared/services/confirm-dialog.service';
import { AuthService } from '../../../core/services/auth.service';
import { TypeCategoryDTO } from '../../../core/models';
import { TypeCategoryFormComponent } from '../type-category-form/type-category-form.component';

@Component({
  selector: 'app-type-category-list',
  templateUrl: './type-category-list.component.html',
  styleUrl: './type-category-list.component.scss',
})
export class TypeCategoryListComponent implements OnInit {
  readonly displayedColumns = ['nameTypeCategory', 'description', 'actions'];
  loading = true;
  types: TypeCategoryDTO[] = [];
  filtered: TypeCategoryDTO[] = [];
  searchTerm = '';

  constructor(
    private readonly typeCategoryService: TypeCategoryService,
    private readonly notification: NotificationService,
    private readonly dialog: MatDialog,
    private readonly confirmDialog: ConfirmDialogService,
    readonly authService: AuthService
  ) {}

  get canManage(): boolean {
    return this.authService.hasAnyRole(['ADMIN', 'WAREHOUSE_KEEPER']);
  }

  get canDelete(): boolean {
    return this.authService.hasAnyRole(['ADMIN', 'WAREHOUSE_KEEPER']);
  }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.typeCategoryService
      .findAll()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((data) => {
        this.types = data;
        this.applyFilter();
      });
  }

  applyFilter(): void {
    const term = this.searchTerm.trim().toLowerCase();
    this.filtered = term
      ? this.types.filter((t) => t.nameTypeCategory.toLowerCase().includes(term))
      : this.types;
  }

  openForm(typeCategory: TypeCategoryDTO | null): void {
    const ref = this.dialog.open(TypeCategoryFormComponent, {
      width: '460px',
      maxWidth: '95vw',
      data: { typeCategory },
      autoFocus: false,
    });

    ref.afterClosed().subscribe((changed) => {
      if (changed) {
        this.load();
      }
    });
  }

  remove(typeCategory: TypeCategoryDTO): void {
    this.confirmDialog
      .confirm({
        title: 'Eliminar tipo de categoría',
        message: `¿Seguro que deseas eliminar "${typeCategory.nameTypeCategory}"?`,
        danger: true,
        confirmLabel: 'Eliminar',
      })
      .subscribe((confirmed) => {
        if (!confirmed || typeCategory.idTypeCategory == null) {
          return;
        }
        this.typeCategoryService.delete(typeCategory.idTypeCategory).subscribe(() => {
          this.notification.success('Tipo de categoría eliminado.');
          this.load();
        });
      });
  }
}
