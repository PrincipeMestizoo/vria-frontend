import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { finalize } from 'rxjs';
import { UserService } from '../../../core/services/user.service';
import { NotificationService } from '../../../core/services/notification.service';
import { ConfirmDialogService } from '../../../shared/services/confirm-dialog.service';
import { AuthService } from '../../../core/services/auth.service';
import { UserResponseDTO } from '../../../core/models';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  readonly displayedColumns = ['name', 'email', 'role', 'enabled', 'actions'];
  loading = true;
  users: UserResponseDTO[] = [];
  filtered: UserResponseDTO[] = [];
  searchTerm = '';

  constructor(
    private readonly userService: UserService,
    private readonly notification: NotificationService,
    private readonly dialog: MatDialog,
    private readonly confirmDialog: ConfirmDialogService,
    readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.userService
      .findAll()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((data) => {
        this.users = data;
        this.applyFilter();
      });
  }

  applyFilter(): void {
    const term = this.searchTerm.trim().toLowerCase();
    this.filtered = term
      ? this.users.filter(
          (u) =>
            `${u.name} ${u.lastName}`.toLowerCase().includes(term) ||
            u.email.toLowerCase().includes(term)
        )
      : this.users;
  }

  openForm(user: UserResponseDTO | null): void {
    const ref = this.dialog.open(UserFormComponent, {
      width: '520px',
      maxWidth: '95vw',
      data: { user },
      autoFocus: false,
    });

    ref.afterClosed().subscribe((changed) => {
      if (changed) {
        this.load();
      }
    });
  }

  remove(user: UserResponseDTO): void {
    this.confirmDialog
      .confirm({
        title: 'Eliminar usuario',
        message: `¿Seguro que deseas eliminar a "${user.name} ${user.lastName}"?`,
        danger: true,
        confirmLabel: 'Eliminar',
      })
      .subscribe((confirmed) => {
        if (!confirmed) {
          return;
        }
        this.userService.delete(user.idUser).subscribe(() => {
          this.notification.success('Usuario eliminado.');
          this.load();
        });
      });
  }
}
