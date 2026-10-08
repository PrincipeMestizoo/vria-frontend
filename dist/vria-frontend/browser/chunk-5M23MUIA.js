import {
  UserService
} from "./chunk-VI45EBKF.js";
import {
  ConfirmDialogService
} from "./chunk-EEHPKJDV.js";
import {
  firstErrorMessage
} from "./chunk-5N3PECVO.js";
import {
  NotificationService
} from "./chunk-YGVAY7K4.js";
import {
  AuthService
} from "./chunk-S2O5XATP.js";
import {
  ALL_ROLES,
  DefaultValueAccessor,
  EmptyStateComponent,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  InitialsPipe,
  MAT_DIALOG_DATA,
  MatButton,
  MatCell,
  MatCellDef,
  MatCheckbox,
  MatChip,
  MatColumnDef,
  MatDialog,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
  MatError,
  MatFormField,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatIcon,
  MatIconButton,
  MatInput,
  MatLabel,
  MatOption,
  MatRow,
  MatRowDef,
  MatSelect,
  MatSuffix,
  MatTable,
  MatTooltip,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModel,
  PageHeaderComponent,
  RoleLabelPipe,
  RouterModule,
  SharedModule,
  SubmitButtonComponent,
  Validators,
  finalize,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UK26UTD3.js";

// src/app/features/users/user-form/user-form.component.ts
function UserFormComponent_mat_error_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorFor("name", "El nombre"));
  }
}
function UserFormComponent_mat_error_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorFor("lastName", "El apellido"));
  }
}
function UserFormComponent_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorFor("email", "El correo"));
  }
}
function UserFormComponent_mat_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "roleLabel");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r2 = ctx.$implicit;
    \u0275\u0275property("value", role_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, role_r2));
  }
}
function UserFormComponent_mat_error_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorFor("password", "La contrase\xF1a"));
  }
}
var UserFormComponent = class _UserFormComponent {
  constructor(fb, userService, notification, dialogRef, data) {
    this.fb = fb;
    this.userService = userService;
    this.notification = notification;
    this.dialogRef = dialogRef;
    this.data = data;
    this.loading = false;
    this.hidePassword = true;
    this.roles = ALL_ROLES;
    this.form = this.fb.nonNullable.group({
      name: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      enabled: [true, [Validators.required]],
      role: ["COMMERCIAL_ADVISOR", [Validators.required]],
      password: [""]
    });
    this.isEdit = !!data.user;
    if (data.user) {
      this.form.patchValue({
        name: data.user.name,
        lastName: data.user.lastName,
        email: data.user.email,
        enabled: data.user.enabled,
        role: data.user.role
      });
    }
    const passwordValidators = this.isEdit ? [Validators.minLength(8)] : [Validators.required, Validators.minLength(8)];
    this.form.get("password")?.setValidators(passwordValidators);
    this.form.get("password")?.updateValueAndValidity();
  }
  errorFor(controlName, label) {
    return firstErrorMessage(this.form.get(controlName), label);
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const value = this.form.getRawValue();
    const payload = {
      name: value.name,
      lastName: value.lastName,
      email: value.email,
      enabled: value.enabled,
      role: value.role,
      password: value.password || null
    };
    this.loading = true;
    const request$ = this.isEdit ? this.userService.update(this.data.user.idUser, payload) : this.userService.create(payload);
    request$.pipe(finalize(() => this.loading = false)).subscribe({
      next: () => {
        this.notification.success(this.isEdit ? "Usuario actualizado." : "Usuario creado.");
        this.dialogRef.close(true);
      }
    });
  }
  cancel() {
    this.dialogRef.close(false);
  }
  static {
    this.\u0275fac = function UserFormComponent_Factory(t) {
      return new (t || _UserFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserFormComponent, selectors: [["app-user-form"]], decls: 39, vars: 13, consts: [["mat-dialog-title", ""], [3, "ngSubmit", "formGroup"], [1, "form-row"], ["appearance", "outline"], ["matInput", "", "formControlName", "name"], [4, "ngIf"], ["matInput", "", "formControlName", "lastName"], ["matInput", "", "type", "email", "formControlName", "email"], ["formControlName", "role"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["formControlName", "enabled"], ["align", "end"], ["mat-button", "", "type", "button", 3, "click"], [3, "label", "loading", "disabled"], [3, "value"]], template: function UserFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "form", 1);
        \u0275\u0275listener("ngSubmit", function UserFormComponent_Template_form_ngSubmit_2_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(3, "mat-dialog-content")(4, "div", 2)(5, "mat-form-field", 3)(6, "mat-label");
        \u0275\u0275text(7, "Nombre");
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "input", 4);
        \u0275\u0275template(9, UserFormComponent_mat_error_9_Template, 2, 1, "mat-error", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "mat-form-field", 3)(11, "mat-label");
        \u0275\u0275text(12, "Apellido");
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "input", 6);
        \u0275\u0275template(14, UserFormComponent_mat_error_14_Template, 2, 1, "mat-error", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "mat-form-field", 3)(16, "mat-label");
        \u0275\u0275text(17, "Correo electr\xF3nico");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 7);
        \u0275\u0275template(19, UserFormComponent_mat_error_19_Template, 2, 1, "mat-error", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "mat-form-field", 3)(21, "mat-label");
        \u0275\u0275text(22, "Rol");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "mat-select", 8);
        \u0275\u0275template(24, UserFormComponent_mat_option_24_Template, 3, 4, "mat-option", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "mat-form-field", 3)(26, "mat-label");
        \u0275\u0275text(27);
        \u0275\u0275elementEnd();
        \u0275\u0275element(28, "input", 10);
        \u0275\u0275elementStart(29, "button", 11);
        \u0275\u0275listener("click", function UserFormComponent_Template_button_click_29_listener() {
          return ctx.hidePassword = !ctx.hidePassword;
        });
        \u0275\u0275elementStart(30, "mat-icon");
        \u0275\u0275text(31);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(32, UserFormComponent_mat_error_32_Template, 2, 1, "mat-error", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "mat-checkbox", 12);
        \u0275\u0275text(34, "Usuario habilitado");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "mat-dialog-actions", 13)(36, "button", 14);
        \u0275\u0275listener("click", function UserFormComponent_Template_button_click_36_listener() {
          return ctx.cancel();
        });
        \u0275\u0275text(37, "Cancelar");
        \u0275\u0275elementEnd();
        \u0275\u0275element(38, "app-submit-button", 15);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_9_0;
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.isEdit ? "Editar usuario" : "Nuevo usuario");
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", (tmp_2_0 = ctx.form.get("name")) == null ? null : tmp_2_0.invalid);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", (tmp_3_0 = ctx.form.get("lastName")) == null ? null : tmp_3_0.invalid);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", (tmp_4_0 = ctx.form.get("email")) == null ? null : tmp_4_0.invalid);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.roles);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.isEdit ? "Nueva contrase\xF1a (opcional)" : "Contrase\xF1a");
        \u0275\u0275advance();
        \u0275\u0275property("type", ctx.hidePassword ? "password" : "text");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.hidePassword ? "visibility_off" : "visibility");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_9_0 = ctx.form.get("password")) == null ? null : tmp_9_0.invalid);
        \u0275\u0275advance(6);
        \u0275\u0275property("label", ctx.isEdit ? "Guardar cambios" : "Crear")("loading", ctx.loading)("disabled", ctx.form.invalid);
      }
    }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatIcon, MatButton, MatIconButton, MatFormField, MatLabel, MatError, MatSuffix, MatInput, MatSelect, MatOption, MatDialogTitle, MatDialogActions, MatDialogContent, MatCheckbox, SubmitButtonComponent, RoleLabelPipe], styles: ["\n\nmat-dialog-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n  min-width: 24rem;\n}\n@media (max-width: 480px) {\n  mat-dialog-content[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0 1rem;\n}\n@media (max-width: 480px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=user-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserFormComponent, { className: "UserFormComponent", filePath: "src/app/features/users/user-form/user-form.component.ts", lineNumber: 15 });
})();

// src/app/features/users/user-list/user-list.component.ts
function UserListComponent_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 19);
    \u0275\u0275text(1, "Nombre");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 20)(1, "div", 21)(2, "span", 22);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "initials");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, row_r1.name));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", row_r1.name, " ", row_r1.lastName, " ");
  }
}
function UserListComponent_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 19);
    \u0275\u0275text(1, "Correo");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r2.email);
  }
}
function UserListComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 19);
    \u0275\u0275text(1, "Rol");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 20)(1, "mat-chip", 23);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "roleLabel");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, row_r3.role));
  }
}
function UserListComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 19);
    \u0275\u0275text(1, "Estado");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 20);
    \u0275\u0275element(1, "span", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("status-dot--off", !row_r4.enabled);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.enabled ? "Activo" : "Inactivo", " ");
  }
}
function UserListComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 19);
  }
}
function UserListComponent_td_29_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function UserListComponent_td_29_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const row_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.remove(row_r6));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function UserListComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 20)(1, "div", 25)(2, "button", 26);
    \u0275\u0275listener("click", function UserListComponent_td_29_Template_button_click_2_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.openForm(row_r6));
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, UserListComponent_td_29_button_5_Template, 3, 0, "button", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", (ctx_r6.authService.currentUser == null ? null : ctx_r6.authService.currentUser.idUser) !== row_r6.idUser);
  }
}
function UserListComponent_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 29);
  }
}
function UserListComponent_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 30);
  }
}
function UserListComponent_app_empty_state_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 31);
  }
}
var UserListComponent = class _UserListComponent {
  constructor(userService, notification, dialog, confirmDialog, authService) {
    this.userService = userService;
    this.notification = notification;
    this.dialog = dialog;
    this.confirmDialog = confirmDialog;
    this.authService = authService;
    this.displayedColumns = ["name", "email", "role", "enabled", "actions"];
    this.loading = true;
    this.users = [];
    this.filtered = [];
    this.searchTerm = "";
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.userService.findAll().pipe(finalize(() => this.loading = false)).subscribe((data) => {
      this.users = data;
      this.applyFilter();
    });
  }
  applyFilter() {
    const term = this.searchTerm.trim().toLowerCase();
    this.filtered = term ? this.users.filter((u) => `${u.name} ${u.lastName}`.toLowerCase().includes(term) || u.email.toLowerCase().includes(term)) : this.users;
  }
  openForm(user) {
    const ref = this.dialog.open(UserFormComponent, {
      width: "520px",
      maxWidth: "95vw",
      data: { user },
      autoFocus: false
    });
    ref.afterClosed().subscribe((changed) => {
      if (changed) {
        this.load();
      }
    });
  }
  remove(user) {
    this.confirmDialog.confirm({
      title: "Eliminar usuario",
      message: `\xBFSeguro que deseas eliminar a "${user.name} ${user.lastName}"?`,
      danger: true,
      confirmLabel: "Eliminar"
    }).subscribe((confirmed) => {
      if (!confirmed) {
        return;
      }
      this.userService.delete(user.idUser).subscribe(() => {
        this.notification.success("Usuario eliminado.");
        this.load();
      });
    });
  }
  static {
    this.\u0275fac = function UserListComponent_Factory(t) {
      return new (t || _UserListComponent)(\u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(ConfirmDialogService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserListComponent, selectors: [["app-user-list"]], decls: 33, vars: 5, consts: [[1, "vria-page"], ["title", "Usuarios", "subtitle", "Administra las cuentas del sistema VRIA.", "icon", "manage_accounts"], ["mat-flat-button", "", "color", "primary", 1, "vria-btn", 3, "click"], [1, "list-toolbar"], ["appearance", "outline", 1, "list-toolbar__search"], ["matInput", "", "placeholder", "Nombre o correo", 3, "ngModelChange", "ngModel"], ["matSuffix", ""], [1, "vria-card", "data-table-card"], ["mat-table", "", 1, "data-table", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "email"], ["matColumnDef", "role"], ["matColumnDef", "enabled"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "fade-row", 4, "matRowDef", "matRowDefColumns"], ["icon", "manage_accounts", "title", "No hay usuarios", "message", "Crea el primer usuario del sistema.", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "user-cell"], [1, "user-cell__avatar"], [1, "state-chip"], [1, "status-dot"], [1, "cell-actions"], ["mat-icon-button", "", "matTooltip", "Editar", 1, "vria-btn-warning", 3, "click"], ["mat-icon-button", "", "matTooltip", "Eliminar", "color", "warn", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Eliminar", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 1, "fade-row"], ["icon", "manage_accounts", "title", "No hay usuarios", "message", "Crea el primer usuario del sistema."]], template: function UserListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "app-page-header", 1)(2, "button", 2);
        \u0275\u0275listener("click", function UserListComponent_Template_button_click_2_listener() {
          return ctx.openForm(null);
        });
        \u0275\u0275elementStart(3, "mat-icon");
        \u0275\u0275text(4, "person_add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Nuevo usuario ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 3)(7, "mat-form-field", 4)(8, "mat-label");
        \u0275\u0275text(9, "Buscar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "input", 5);
        \u0275\u0275twoWayListener("ngModelChange", function UserListComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function UserListComponent_Template_input_ngModelChange_10_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "mat-icon", 6);
        \u0275\u0275text(12, "search");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 7)(14, "table", 8);
        \u0275\u0275elementContainerStart(15, 9);
        \u0275\u0275template(16, UserListComponent_th_16_Template, 2, 0, "th", 10)(17, UserListComponent_td_17_Template, 6, 5, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(18, 12);
        \u0275\u0275template(19, UserListComponent_th_19_Template, 2, 0, "th", 10)(20, UserListComponent_td_20_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(21, 13);
        \u0275\u0275template(22, UserListComponent_th_22_Template, 2, 0, "th", 10)(23, UserListComponent_td_23_Template, 4, 3, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(24, 14);
        \u0275\u0275template(25, UserListComponent_th_25_Template, 2, 0, "th", 10)(26, UserListComponent_td_26_Template, 3, 3, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(27, 15);
        \u0275\u0275template(28, UserListComponent_th_28_Template, 1, 0, "th", 10)(29, UserListComponent_td_29_Template, 6, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(30, UserListComponent_tr_30_Template, 1, 0, "tr", 16)(31, UserListComponent_tr_31_Template, 1, 0, "tr", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275template(32, UserListComponent_app_empty_state_32_Template, 1, 0, "app-empty-state", 18);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
        \u0275\u0275advance(4);
        \u0275\u0275property("dataSource", ctx.filtered);
        \u0275\u0275advance(16);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.filtered.length === 0);
      }
    }, dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgModel, MatIcon, MatButton, MatIconButton, MatFormField, MatLabel, MatSuffix, MatInput, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatChip, MatTooltip, PageHeaderComponent, EmptyStateComponent, RoleLabelPipe, InitialsPipe], styles: ["\n\n.user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n}\n.user-cell__avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: #fff;\n  background: var(--vria-gradient);\n  box-shadow: 3px 3px 8px rgba(107, 31, 158, 0.3), -2px -2px 6px rgba(255, 255, 255, 0.5);\n  flex-shrink: 0;\n}\n.status-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #16a34a;\n  margin-right: 0.4rem;\n}\n.status-dot--off[_ngcontent-%COMP%] {\n  background: #9ca3af;\n}\n/*# sourceMappingURL=user-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserListComponent, { className: "UserListComponent", filePath: "src/app/features/users/user-list/user-list.component.ts", lineNumber: 16 });
})();

// src/app/features/users/users-routing.module.ts
var routes = [{ path: "", component: UserListComponent, title: "Usuarios \xB7 VRIA" }];
var UsersRoutingModule = class _UsersRoutingModule {
  static {
    this.\u0275fac = function UsersRoutingModule_Factory(t) {
      return new (t || _UsersRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _UsersRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/features/users/users.module.ts
var UsersModule = class _UsersModule {
  static {
    this.\u0275fac = function UsersModule_Factory(t) {
      return new (t || _UsersModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _UsersModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, UsersRoutingModule] });
  }
};
export {
  UsersModule
};
//# sourceMappingURL=chunk-5M23MUIA.js.map
