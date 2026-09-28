import {
  TransferService
} from "./chunk-7IKLVPJU.js";
import {
  ConfirmDialogService
} from "./chunk-52ERSPUA.js";
import {
  firstErrorMessage
} from "./chunk-5N3PECVO.js";
import {
  NotificationService
} from "./chunk-X56Y7PIT.js";
import {
  AuthService,
  CurrencyPipe,
  DatePipe,
  DefaultValueAccessor,
  EmptyStateComponent,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MatButton,
  MatCell,
  MatCellDef,
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
  MatPrefix,
  MatRow,
  MatRowDef,
  MatSuffix,
  MatTable,
  MatTooltip,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgIf,
  NgModel,
  NumberValueAccessor,
  PageHeaderComponent,
  RouterModule,
  SharedModule,
  SubmitButtonComponent,
  Validators,
  __spreadValues,
  finalize,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ODHWVYXN.js";

// src/app/features/transfers/transfer-form/transfer-form.component.ts
function TransferFormComponent_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorFor("nameClient", "El cliente"));
  }
}
function TransferFormComponent_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorFor("amount", "El monto"));
  }
}
function TransferFormComponent_mat_error_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorFor("bank", "El banco"));
  }
}
function TransferFormComponent_mat_error_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorFor("destination", "El destino"));
  }
}
function TransferFormComponent_mat_error_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorFor("dateTransfer", "La fecha"), " ");
  }
}
var TransferFormComponent = class _TransferFormComponent {
  constructor(fb, transferService, notification, dialogRef) {
    this.fb = fb;
    this.transferService = transferService;
    this.notification = notification;
    this.dialogRef = dialogRef;
    this.loading = false;
    this.form = this.fb.nonNullable.group({
      nameClient: ["", [Validators.required]],
      amount: [0, [Validators.required, Validators.min(0.01)]],
      bank: ["", [Validators.required]],
      destination: ["", [Validators.required]],
      dateTransfer: ["", [Validators.required]]
    });
  }
  errorFor(controlName, label) {
    return firstErrorMessage(this.form.get(controlName), label);
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const payload = __spreadValues({ idTransfer: null }, this.form.getRawValue());
    this.loading = true;
    this.transferService.create(payload).pipe(finalize(() => this.loading = false)).subscribe({
      next: () => {
        this.notification.success("Comprobante de transferencia registrado.");
        this.dialogRef.close(true);
      }
    });
  }
  cancel() {
    this.dialogRef.close(false);
  }
  static {
    this.\u0275fac = function TransferFormComponent_Factory(t) {
      return new (t || _TransferFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TransferService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransferFormComponent, selectors: [["app-transfer-form"]], decls: 36, vars: 8, consts: [["mat-dialog-title", ""], [3, "ngSubmit", "formGroup"], ["appearance", "outline"], ["matInput", "", "formControlName", "nameClient"], [4, "ngIf"], [1, "form-row"], ["matTextPrefix", ""], ["matInput", "", "type", "number", "min", "0", "step", "0.01", "formControlName", "amount"], ["matInput", "", "formControlName", "bank"], ["matInput", "", "formControlName", "destination", "placeholder", "Cuenta o entidad destino"], ["matInput", "", "type", "datetime-local", "formControlName", "dateTransfer"], ["align", "end"], ["mat-button", "", "type", "button", 3, "click"], ["label", "Registrar", 3, "loading", "disabled"]], template: function TransferFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1, "Nueva transferencia");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "form", 1);
        \u0275\u0275listener("ngSubmit", function TransferFormComponent_Template_form_ngSubmit_2_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(3, "mat-dialog-content")(4, "mat-form-field", 2)(5, "mat-label");
        \u0275\u0275text(6, "Cliente");
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "input", 3);
        \u0275\u0275template(8, TransferFormComponent_mat_error_8_Template, 2, 1, "mat-error", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 5)(10, "mat-form-field", 2)(11, "mat-label");
        \u0275\u0275text(12, "Monto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span", 6);
        \u0275\u0275text(14, "$\xA0");
        \u0275\u0275elementEnd();
        \u0275\u0275element(15, "input", 7);
        \u0275\u0275template(16, TransferFormComponent_mat_error_16_Template, 2, 1, "mat-error", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "mat-form-field", 2)(18, "mat-label");
        \u0275\u0275text(19, "Banco");
        \u0275\u0275elementEnd();
        \u0275\u0275element(20, "input", 8);
        \u0275\u0275template(21, TransferFormComponent_mat_error_21_Template, 2, 1, "mat-error", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "mat-form-field", 2)(23, "mat-label");
        \u0275\u0275text(24, "Destino");
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "input", 9);
        \u0275\u0275template(26, TransferFormComponent_mat_error_26_Template, 2, 1, "mat-error", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "mat-form-field", 2)(28, "mat-label");
        \u0275\u0275text(29, "Fecha de la transferencia");
        \u0275\u0275elementEnd();
        \u0275\u0275element(30, "input", 10);
        \u0275\u0275template(31, TransferFormComponent_mat_error_31_Template, 2, 1, "mat-error", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "mat-dialog-actions", 11)(33, "button", 12);
        \u0275\u0275listener("click", function TransferFormComponent_Template_button_click_33_listener() {
          return ctx.cancel();
        });
        \u0275\u0275text(34, "Cancelar");
        \u0275\u0275elementEnd();
        \u0275\u0275element(35, "app-submit-button", 13);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", (tmp_1_0 = ctx.form.get("nameClient")) == null ? null : tmp_1_0.invalid);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", (tmp_2_0 = ctx.form.get("amount")) == null ? null : tmp_2_0.invalid);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", (tmp_3_0 = ctx.form.get("bank")) == null ? null : tmp_3_0.invalid);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", (tmp_4_0 = ctx.form.get("destination")) == null ? null : tmp_4_0.invalid);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", (tmp_5_0 = ctx.form.get("dateTransfer")) == null ? null : tmp_5_0.invalid);
        \u0275\u0275advance(4);
        \u0275\u0275property("loading", ctx.loading)("disabled", ctx.form.invalid);
      }
    }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, MatButton, MatFormField, MatLabel, MatError, MatPrefix, MatInput, MatDialogTitle, MatDialogActions, MatDialogContent, SubmitButtonComponent], styles: ["\n\nmat-dialog-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  min-width: 24rem;\n}\n@media (max-width: 480px) {\n  mat-dialog-content[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0 1rem;\n}\n@media (max-width: 480px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=transfer-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransferFormComponent, { className: "TransferFormComponent", filePath: "src/app/features/transfers/transfer-form/transfer-form.component.ts", lineNumber: 15 });
})();

// src/app/features/transfers/transfer-list/transfer-list.component.ts
function TransferListComponent_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 20);
    \u0275\u0275text(1, "Cliente");
    \u0275\u0275elementEnd();
  }
}
function TransferListComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r1.nameClient);
  }
}
function TransferListComponent_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 20);
    \u0275\u0275text(1, "Banco");
    \u0275\u0275elementEnd();
  }
}
function TransferListComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r2.bank);
  }
}
function TransferListComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 20);
    \u0275\u0275text(1, "Destino");
    \u0275\u0275elementEnd();
  }
}
function TransferListComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r3.destination);
  }
}
function TransferListComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 20);
    \u0275\u0275text(1, "Fecha");
    \u0275\u0275elementEnd();
  }
}
function TransferListComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, row_r4.dateTransfer, "d MMM y, h:mm a"));
  }
}
function TransferListComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 20);
    \u0275\u0275text(1, "Monto");
    \u0275\u0275elementEnd();
  }
}
function TransferListComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(2, 1, row_r5.amount, "COP", "symbol-narrow", "1.0-0"));
  }
}
function TransferListComponent_th_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 20);
  }
}
function TransferListComponent_td_32_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function TransferListComponent_td_32_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const row_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.remove(row_r7));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function TransferListComponent_td_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21)(1, "div", 22);
    \u0275\u0275template(2, TransferListComponent_td_32_button_2_Template, 3, 0, "button", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r7.canDelete);
  }
}
function TransferListComponent_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 25);
  }
}
function TransferListComponent_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 26);
  }
}
function TransferListComponent_app_empty_state_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 27);
  }
}
var TransferListComponent = class _TransferListComponent {
  constructor(transferService, notification, dialog, confirmDialog, authService) {
    this.transferService = transferService;
    this.notification = notification;
    this.dialog = dialog;
    this.confirmDialog = confirmDialog;
    this.authService = authService;
    this.displayedColumns = ["nameClient", "bank", "destination", "dateTransfer", "amount", "actions"];
    this.loading = true;
    this.transfers = [];
    this.filtered = [];
    this.searchTerm = "";
  }
  get canDelete() {
    return this.authService.hasAnyRole(["ADMIN"]);
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.transferService.findAll().pipe(finalize(() => this.loading = false)).subscribe((data) => {
      this.transfers = data;
      this.applyFilter();
    });
  }
  applyFilter() {
    const term = this.searchTerm.trim().toLowerCase();
    this.filtered = term ? this.transfers.filter((t) => t.nameClient.toLowerCase().includes(term) || t.bank.toLowerCase().includes(term) || t.destination.toLowerCase().includes(term)) : this.transfers;
  }
  openForm() {
    const ref = this.dialog.open(TransferFormComponent, {
      width: "520px",
      maxWidth: "95vw",
      autoFocus: false
    });
    ref.afterClosed().subscribe((changed) => {
      if (changed) {
        this.load();
      }
    });
  }
  remove(transfer) {
    this.confirmDialog.confirm({
      title: "Eliminar transferencia",
      message: `\xBFSeguro que deseas eliminar la transferencia de "${transfer.nameClient}"?`,
      danger: true,
      confirmLabel: "Eliminar"
    }).subscribe((confirmed) => {
      if (!confirmed || transfer.idTransfer == null) {
        return;
      }
      this.transferService.delete(transfer.idTransfer).subscribe(() => {
        this.notification.success("Transferencia eliminada.");
        this.load();
      });
    });
  }
  static {
    this.\u0275fac = function TransferListComponent_Factory(t) {
      return new (t || _TransferListComponent)(\u0275\u0275directiveInject(TransferService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(ConfirmDialogService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransferListComponent, selectors: [["app-transfer-list"]], decls: 36, vars: 5, consts: [[1, "vria-page"], ["title", "Transferencias", "subtitle", "Comprobantes de pago por transferencia.", "icon", "receipt_long"], ["mat-flat-button", "", "color", "primary", 1, "vria-btn", 3, "click"], [1, "list-toolbar"], ["appearance", "outline", 1, "list-toolbar__search"], ["matInput", "", "placeholder", "Cliente, banco o destino", 3, "ngModelChange", "ngModel"], ["matSuffix", ""], [1, "vria-card", "data-table-card"], ["mat-table", "", 1, "data-table", 3, "dataSource"], ["matColumnDef", "nameClient"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "bank"], ["matColumnDef", "destination"], ["matColumnDef", "dateTransfer"], ["matColumnDef", "amount"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "fade-row", 4, "matRowDef", "matRowDefColumns"], ["icon", "receipt_long", "title", "No hay transferencias", "message", "Registra el primer comprobante de transferencia.", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "cell-actions"], ["mat-icon-button", "", "matTooltip", "Eliminar", "color", "warn", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Eliminar", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 1, "fade-row"], ["icon", "receipt_long", "title", "No hay transferencias", "message", "Registra el primer comprobante de transferencia."]], template: function TransferListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "app-page-header", 1)(2, "button", 2);
        \u0275\u0275listener("click", function TransferListComponent_Template_button_click_2_listener() {
          return ctx.openForm();
        });
        \u0275\u0275elementStart(3, "mat-icon");
        \u0275\u0275text(4, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Nueva transferencia ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 3)(7, "mat-form-field", 4)(8, "mat-label");
        \u0275\u0275text(9, "Buscar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "input", 5);
        \u0275\u0275twoWayListener("ngModelChange", function TransferListComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function TransferListComponent_Template_input_ngModelChange_10_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "mat-icon", 6);
        \u0275\u0275text(12, "search");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 7)(14, "table", 8);
        \u0275\u0275elementContainerStart(15, 9);
        \u0275\u0275template(16, TransferListComponent_th_16_Template, 2, 0, "th", 10)(17, TransferListComponent_td_17_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(18, 12);
        \u0275\u0275template(19, TransferListComponent_th_19_Template, 2, 0, "th", 10)(20, TransferListComponent_td_20_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(21, 13);
        \u0275\u0275template(22, TransferListComponent_th_22_Template, 2, 0, "th", 10)(23, TransferListComponent_td_23_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(24, 14);
        \u0275\u0275template(25, TransferListComponent_th_25_Template, 2, 0, "th", 10)(26, TransferListComponent_td_26_Template, 3, 4, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(27, 15);
        \u0275\u0275template(28, TransferListComponent_th_28_Template, 2, 0, "th", 10)(29, TransferListComponent_td_29_Template, 3, 6, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(30, 16);
        \u0275\u0275template(31, TransferListComponent_th_31_Template, 1, 0, "th", 10)(32, TransferListComponent_td_32_Template, 3, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(33, TransferListComponent_tr_33_Template, 1, 0, "tr", 17)(34, TransferListComponent_tr_34_Template, 1, 0, "tr", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275template(35, TransferListComponent_app_empty_state_35_Template, 1, 0, "app-empty-state", 19);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
        \u0275\u0275advance(4);
        \u0275\u0275property("dataSource", ctx.filtered);
        \u0275\u0275advance(19);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.filtered.length === 0);
      }
    }, dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgModel, MatIcon, MatButton, MatIconButton, MatFormField, MatLabel, MatSuffix, MatInput, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatTooltip, PageHeaderComponent, EmptyStateComponent, CurrencyPipe, DatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=transfer-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransferListComponent, { className: "TransferListComponent", filePath: "src/app/features/transfers/transfer-list/transfer-list.component.ts", lineNumber: 16 });
})();

// src/app/features/transfers/transfers-routing.module.ts
var routes = [{ path: "", component: TransferListComponent, title: "Transferencias \xB7 VRIA" }];
var TransfersRoutingModule = class _TransfersRoutingModule {
  static {
    this.\u0275fac = function TransfersRoutingModule_Factory(t) {
      return new (t || _TransfersRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TransfersRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/features/transfers/transfers.module.ts
var TransfersModule = class _TransfersModule {
  static {
    this.\u0275fac = function TransfersModule_Factory(t) {
      return new (t || _TransfersModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TransfersModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, TransfersRoutingModule] });
  }
};
export {
  TransfersModule
};
//# sourceMappingURL=chunk-M657JATT.js.map
