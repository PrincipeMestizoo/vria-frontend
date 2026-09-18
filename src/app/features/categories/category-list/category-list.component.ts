import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { finalize } from 'rxjs';
import { CategoryService } from '../../../core/services/category.service';
import { NotificationService } from '../../../core/services/notification.service';
import { ConfirmDialogService } from '../../../shared/services/confirm-dialog.service';
import { AuthService } from '../../../core/services/auth.service';
import { CategoryDTO } from '../../../core/models';
import { CategoryFormComponent } from '../category-form/category-form.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss',
})
export class CategoryListComponent implements OnInit {
  readonly displayedColumns = ['nameCategory', 'nameTypeCategory', 'actions'];
  loading = true;
  categories: CategoryDTO[] = [];
  filtered: CategoryDTO[] = [];
  searchTerm = '';

  constructor(
    private readonly categoryService: CategoryService,
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
    this.categoryService
      .findAll()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((data) => {
        this.categories = data;
        this.applyFilter();
      });
  }

  applyFilter(): void {
    const term = this.searchTerm.trim().toLowerCase();
    this.filtered = term
      ? this.categories.filter((c) => c.nameCategory.toLowerCase().includes(term))
      : this.categories;
  }

  openForm(category: CategoryDTO | null): void {
    const ref = this.dialog.open(CategoryFormComponent, {
      width: '460px',
      maxWidth: '95vw',
      data: { category },
      autoFocus: false,
    });

    ref.afterClosed().subscribe((changed) => {
      if (changed) {
        this.load();
      }
    });
  }

  remove(category: CategoryDTO): void {
    this.confirmDialog
      .confirm({
        title: 'Eliminar categoría',
        message: `¿Seguro que deseas eliminar "${category.nameCategory}"?`,
        danger: true,
        confirmLabel: 'Eliminar',
      })
      .subscribe((confirmed) => {
        if (!confirmed || category.idCategory == null) {
          return;
        }
        this.categoryService.delete(category.idCategory).subscribe(() => {
          this.notification.success('Categoría eliminada.');
          this.load();
        });
      });
  }
}
