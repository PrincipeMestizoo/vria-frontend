import {
  DeliveryService
} from "./chunk-QQTCFEFZ.js";
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
  DELIVERY_STATES,
  DatePipe,
  DefaultValueAccessor,
  DeliveryStateLabelPipe,
  EmptyStateComponent,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MatButton,
  MatCell,
  MatCellDef,
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
  PAY_MODES,
  PageHeaderComponent,
  PayModeLabelPipe,
  RouterModule,
  SharedModule,
  SubmitButtonComponent,
  Validators,
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
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ODHWVYXN.js";

// src/app/features/deliveries/delivery-form/delivery-form.component.ts
function DeliveryFormComponent_mat_error_9_Template(rf, ctx) {
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
function DeliveryFormComponent_mat_error_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorFor("nameDelivery", "El repartidor"), " ");
  }
}
function DeliveryFormComponent_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorFor("address", "La direcci\xF3n"));
  }
}
function DeliveryFormComponent_mat_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "payModeLabel");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mode_r2 = ctx.$implicit;
    \u0275\u0275property("value", mode_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, mode_r2));
  }
}
function DeliveryFormComponent_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorFor("dateDelivery", "La fecha de entrega"), " ");
  }
}
function DeliveryFormComponent_mat_option_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "deliveryStateLabel");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const state_r3 = ctx.$implicit;
    \u0275\u0275property("value", state_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, state_r3));
  }
}
var DeliveryFormComponent = class _DeliveryFormComponent {
  constructor(fb, deliveryService, notification, dialogRef) {
    this.fb = fb;
    this.deliveryService = deliveryService;
    this.notification = notification;
    this.dialogRef = dialogRef;
    this.loading = false;
    this.payModes = PAY_MODES;
    this.states = DELIVERY_STATES;
    this.form = this.fb.nonNullable.group({
      nameClient: ["", [Validators.required]],
      nameDelivery: ["", [Validators.required]],
      address: ["", [Validators.required]],
      payMode: ["CASH", [Validators.required]],
      dateDelivery: ["", [Validators.required]],
      state: ["PREPARING", [Validators.required]]
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
    const value = this.form.getRawValue();
    const payload = {
      idDelivery: null,
      nameClient: value.nameClient,
      nameDelivery: value.nameDelivery,
      address: value.address,
      payMode: value.payMode,
      dateDelivery: value.dateDelivery,
      state: value.state
    };
    this.loading = true;
    this.deliveryService.create(payload).pipe(finalize(() => this.loading = false)).subscribe({
      next: () => {
        this.notification.success("Entrega registrada.");
        this.dialogRef.close(true);
      }
    });
  }
  cancel() {
    this.dialogRef.close(false);
  }
  static {
    this.\u0275fac = function DeliveryFormComponent_Factory(t) {
      return new (t || _DeliveryFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(DeliveryService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeliveryFormComponent, selectors: [["app-delivery-form"]], decls: 40, vars: 9, consts: [["mat-dialog-title", ""], [3, "ngSubmit", "formGroup"], [1, "form-row"], ["appearance", "outline"], ["matInput", "", "formControlName", "nameClient"], [4, "ngIf"], ["matInput", "", "formControlName", "nameDelivery"], ["matInput", "", "formControlName", "address"], ["formControlName", "payMode"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "type", "datetime-local", "formControlName", "dateDelivery"], ["formControlName", "state"], ["align", "end"], ["mat-button", "", "type", "button", 3, "click"], ["label", "Registrar entrega", 3, "loading", "disabled"], [3, "value"]], template: function DeliveryFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1, "Nueva entrega");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "form", 1);
        \u0275\u0275listener("ngSubmit", function DeliveryFormComponent_Template_form_ngSubmit_2_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(3, "mat-dialog-content")(4, "div", 2)(5, "mat-form-field", 3)(6, "mat-label");
        \u0275\u0275text(7, "Cliente");
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "input", 4);
        \u0275\u0275template(9, DeliveryFormComponent_mat_error_9_Template, 2, 1, "mat-error", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "mat-form-field", 3)(11, "mat-label");
        \u0275\u0275text(12, "Repartidor");
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "input", 6);
        \u0275\u0275template(14, DeliveryFormComponent_mat_error_14_Template, 2, 1, "mat-error", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "mat-form-field", 3)(16, "mat-label");
        \u0275\u0275text(17, "Direcci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 7);
        \u0275\u0275template(19, DeliveryFormComponent_mat_error_19_Template, 2, 1, "mat-error", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 2)(21, "mat-form-field", 3)(22, "mat-label");
        \u0275\u0275text(23, "Modo de pago");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "mat-select", 8);
        \u0275\u0275template(25, DeliveryFormComponent_mat_option_25_Template, 3, 4, "mat-option", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "mat-form-field", 3)(27, "mat-label");
        \u0275\u0275text(28, "Fecha y hora de entrega");
        \u0275\u0275elementEnd();
        \u0275\u0275element(29, "input", 10);
        \u0275\u0275template(30, DeliveryFormComponent_mat_error_30_Template, 2, 1, "mat-error", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "mat-form-field", 3)(32, "mat-label");
        \u0275\u0275text(33, "Estado inicial");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "mat-select", 11);
        \u0275\u0275template(35, DeliveryFormComponent_mat_option_35_Template, 3, 4, "mat-option", 9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "mat-dialog-actions", 12)(37, "button", 13);
        \u0275\u0275listener("click", function DeliveryFormComponent_Template_button_click_37_listener() {
          return ctx.cancel();
        });
        \u0275\u0275text(38, "Cancelar");
        \u0275\u0275elementEnd();
        \u0275\u0275element(39, "app-submit-button", 14);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_5_0;
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", (tmp_1_0 = ctx.form.get("nameClient")) == null ? null : tmp_1_0.invalid);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", (tmp_2_0 = ctx.form.get("nameDelivery")) == null ? null : tmp_2_0.invalid);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", (tmp_3_0 = ctx.form.get("address")) == null ? null : tmp_3_0.invalid);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngForOf", ctx.payModes);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", (tmp_5_0 = ctx.form.get("dateDelivery")) == null ? null : tmp_5_0.invalid);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.states);
        \u0275\u0275advance(4);
        \u0275\u0275property("loading", ctx.loading)("disabled", ctx.form.invalid);
      }
    }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatButton, MatFormField, MatLabel, MatError, MatInput, MatSelect, MatOption, MatDialogTitle, MatDialogActions, MatDialogContent, SubmitButtonComponent, DeliveryStateLabelPipe, PayModeLabelPipe], styles: ["\n\nmat-dialog-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  min-width: 26rem;\n}\n@media (max-width: 480px) {\n  mat-dialog-content[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0 1rem;\n}\n@media (max-width: 480px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=delivery-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeliveryFormComponent, { className: "DeliveryFormComponent", filePath: "src/app/features/deliveries/delivery-form/delivery-form.component.ts", lineNumber: 15 });
})();

// src/app/features/deliveries/delivery-list/delivery-list.component.ts
function DeliveryListComponent_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function DeliveryListComponent_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openForm());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Nueva entrega ");
    \u0275\u0275elementEnd();
  }
}
function DeliveryListComponent_mat_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "deliveryStateLabel");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const state_r3 = ctx.$implicit;
    \u0275\u0275property("value", state_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, state_r3));
  }
}
function DeliveryListComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Cliente");
    \u0275\u0275elementEnd();
  }
}
function DeliveryListComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28)(1, "div", 29)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r4.nameClient);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.address);
  }
}
function DeliveryListComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Repartidor");
    \u0275\u0275elementEnd();
  }
}
function DeliveryListComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.nameDelivery);
  }
}
function DeliveryListComponent_th_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Pago");
    \u0275\u0275elementEnd();
  }
}
function DeliveryListComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "payModeLabel");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, row_r6.payMode));
  }
}
function DeliveryListComponent_th_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Fecha");
    \u0275\u0275elementEnd();
  }
}
function DeliveryListComponent_td_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, row_r7.dateDelivery, "d MMM y, h:mm a"));
  }
}
function DeliveryListComponent_th_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Estado");
    \u0275\u0275elementEnd();
  }
}
function DeliveryListComponent_td_33_mat_select_1_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "deliveryStateLabel");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const state_r10 = ctx.$implicit;
    \u0275\u0275property("value", state_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, state_r10));
  }
}
function DeliveryListComponent_td_33_mat_select_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-select", 31);
    \u0275\u0275listener("ngModelChange", function DeliveryListComponent_td_33_mat_select_1_Template_mat_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const row_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeState(row_r9, $event));
    });
    \u0275\u0275template(1, DeliveryListComponent_td_33_mat_select_1_mat_option_1_Template, 3, 4, "mat-option", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", row_r9.state);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.states);
  }
}
function DeliveryListComponent_td_33_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip", 32);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "deliveryStateLabel");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, row_r9.state));
  }
}
function DeliveryListComponent_td_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275template(1, DeliveryListComponent_td_33_mat_select_1_Template, 2, 2, "mat-select", 30)(2, DeliveryListComponent_td_33_ng_template_2_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const stateChip_r11 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canManage)("ngIfElse", stateChip_r11);
  }
}
function DeliveryListComponent_th_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 27);
  }
}
function DeliveryListComponent_td_36_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function DeliveryListComponent_td_36_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const row_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.remove(row_r13));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function DeliveryListComponent_td_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28)(1, "div", 33);
    \u0275\u0275template(2, DeliveryListComponent_td_36_button_2_Template, 3, 0, "button", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.canDelete);
  }
}
function DeliveryListComponent_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 36);
  }
}
function DeliveryListComponent_tr_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 37);
  }
}
function DeliveryListComponent_app_empty_state_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 38);
  }
}
var DeliveryListComponent = class _DeliveryListComponent {
  constructor(deliveryService, notification, dialog, confirmDialog, authService) {
    this.deliveryService = deliveryService;
    this.notification = notification;
    this.dialog = dialog;
    this.confirmDialog = confirmDialog;
    this.authService = authService;
    this.displayedColumns = ["nameClient", "nameDelivery", "payMode", "dateDelivery", "state", "actions"];
    this.states = DELIVERY_STATES;
    this.loading = true;
    this.deliveries = [];
    this.filtered = [];
    this.searchTerm = "";
    this.stateFilter = "ALL";
  }
  get canManage() {
    return this.authService.hasAnyRole(["ADMIN", "COMMERCIAL_ADVISOR"]);
  }
  get canDelete() {
    return this.authService.hasAnyRole(["ADMIN", "COMMERCIAL_ADVISOR"]);
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.deliveryService.findAll().pipe(finalize(() => this.loading = false)).subscribe((data) => {
      this.deliveries = data;
      this.applyFilter();
    });
  }
  applyFilter() {
    const term = this.searchTerm.trim().toLowerCase();
    this.filtered = this.deliveries.filter((d) => {
      const matchesState = this.stateFilter === "ALL" || d.state === this.stateFilter;
      const matchesTerm = !term || d.nameClient.toLowerCase().includes(term) || d.nameDelivery.toLowerCase().includes(term) || d.address.toLowerCase().includes(term);
      return matchesState && matchesTerm;
    });
  }
  openForm() {
    const ref = this.dialog.open(DeliveryFormComponent, {
      width: "560px",
      maxWidth: "95vw",
      autoFocus: false
    });
    ref.afterClosed().subscribe((changed) => {
      if (changed) {
        this.load();
      }
    });
  }
  changeState(delivery, state) {
    if (delivery.idDelivery == null || state === delivery.state) {
      return;
    }
    this.deliveryService.updateState(delivery.idDelivery, state).subscribe((updated) => {
      delivery.state = updated.state;
      this.notification.success("Estado de la entrega actualizado.");
    });
  }
  remove(delivery) {
    this.confirmDialog.confirm({
      title: "Eliminar entrega",
      message: `\xBFSeguro que deseas eliminar la entrega de "${delivery.nameClient}"?`,
      danger: true,
      confirmLabel: "Eliminar"
    }).subscribe((confirmed) => {
      if (!confirmed || delivery.idDelivery == null) {
        return;
      }
      this.deliveryService.delete(delivery.idDelivery).subscribe(() => {
        this.notification.success("Entrega eliminada.");
        this.load();
      });
    });
  }
  static {
    this.\u0275fac = function DeliveryListComponent_Factory(t) {
      return new (t || _DeliveryListComponent)(\u0275\u0275directiveInject(DeliveryService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(ConfirmDialogService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeliveryListComponent, selectors: [["app-delivery-list"]], decls: 40, vars: 8, consts: [["stateChip", ""], [1, "vria-page"], ["title", "Entregas", "subtitle", "Trazabilidad de entregas a clientes.", "icon", "local_shipping"], ["mat-flat-button", "", "color", "primary", "class", "vria-btn", 3, "click", 4, "ngIf"], [1, "list-toolbar"], ["appearance", "outline", 1, "list-toolbar__search"], ["matInput", "", "placeholder", "Cliente, repartidor o direcci\xF3n", 3, "ngModelChange", "ngModel"], ["matSuffix", ""], ["appearance", "outline", 1, "state-filter"], [3, "ngModelChange", "ngModel"], ["value", "ALL"], [3, "value", 4, "ngFor", "ngForOf"], [1, "vria-card", "data-table-card"], ["mat-table", "", 1, "data-table", 3, "dataSource"], ["matColumnDef", "nameClient"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nameDelivery"], ["matColumnDef", "payMode"], ["matColumnDef", "dateDelivery"], ["matColumnDef", "state"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "fade-row", 4, "matRowDef", "matRowDefColumns"], ["icon", "local_shipping", "title", "No hay entregas", "message", "Registra la primera entrega para hacerle seguimiento.", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", 1, "vria-btn", 3, "click"], [3, "value"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "delivery-cell"], ["class", "state-select", 3, "ngModel", "ngModelChange", 4, "ngIf", "ngIfElse"], [1, "state-select", 3, "ngModelChange", "ngModel"], [1, "state-chip"], [1, "cell-actions"], ["mat-icon-button", "", "matTooltip", "Eliminar", "color", "warn", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Eliminar", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 1, "fade-row"], ["icon", "local_shipping", "title", "No hay entregas", "message", "Registra la primera entrega para hacerle seguimiento."]], template: function DeliveryListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "app-page-header", 2);
        \u0275\u0275template(2, DeliveryListComponent_button_2_Template, 4, 0, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 4)(4, "mat-form-field", 5)(5, "mat-label");
        \u0275\u0275text(6, "Buscar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function DeliveryListComponent_Template_input_ngModelChange_7_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function DeliveryListComponent_Template_input_ngModelChange_7_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "mat-icon", 7);
        \u0275\u0275text(9, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "mat-form-field", 8)(11, "mat-label");
        \u0275\u0275text(12, "Estado");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-select", 9);
        \u0275\u0275twoWayListener("ngModelChange", function DeliveryListComponent_Template_mat_select_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.stateFilter, $event) || (ctx.stateFilter = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function DeliveryListComponent_Template_mat_select_ngModelChange_13_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementStart(14, "mat-option", 10);
        \u0275\u0275text(15, "Todos");
        \u0275\u0275elementEnd();
        \u0275\u0275template(16, DeliveryListComponent_mat_option_16_Template, 3, 4, "mat-option", 11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 12)(18, "table", 13);
        \u0275\u0275elementContainerStart(19, 14);
        \u0275\u0275template(20, DeliveryListComponent_th_20_Template, 2, 0, "th", 15)(21, DeliveryListComponent_td_21_Template, 6, 2, "td", 16);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(22, 17);
        \u0275\u0275template(23, DeliveryListComponent_th_23_Template, 2, 0, "th", 15)(24, DeliveryListComponent_td_24_Template, 2, 1, "td", 16);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(25, 18);
        \u0275\u0275template(26, DeliveryListComponent_th_26_Template, 2, 0, "th", 15)(27, DeliveryListComponent_td_27_Template, 3, 3, "td", 16);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(28, 19);
        \u0275\u0275template(29, DeliveryListComponent_th_29_Template, 2, 0, "th", 15)(30, DeliveryListComponent_td_30_Template, 3, 4, "td", 16);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(31, 20);
        \u0275\u0275template(32, DeliveryListComponent_th_32_Template, 2, 0, "th", 15)(33, DeliveryListComponent_td_33_Template, 4, 2, "td", 16);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(34, 21);
        \u0275\u0275template(35, DeliveryListComponent_th_35_Template, 1, 0, "th", 15)(36, DeliveryListComponent_td_36_Template, 3, 1, "td", 16);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(37, DeliveryListComponent_tr_37_Template, 1, 0, "tr", 22)(38, DeliveryListComponent_tr_38_Template, 1, 0, "tr", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275template(39, DeliveryListComponent_app_empty_state_39_Template, 1, 0, "app-empty-state", 24);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.canManage);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.stateFilter);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.states);
        \u0275\u0275advance(2);
        \u0275\u0275property("dataSource", ctx.filtered);
        \u0275\u0275advance(19);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.filtered.length === 0);
      }
    }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, MatIcon, MatButton, MatIconButton, MatFormField, MatLabel, MatSuffix, MatInput, MatSelect, MatOption, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatChip, MatTooltip, PageHeaderComponent, EmptyStateComponent, DatePipe, DeliveryStateLabelPipe, PayModeLabelPipe], styles: ["\n\n.state-filter[_ngcontent-%COMP%] {\n  width: 12rem;\n  margin-bottom: -1.25em;\n}\n@media (max-width: 600px) {\n  .state-filter[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.delivery-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.delivery-cell[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--vria-text-secondary);\n}\n.state-select[_ngcontent-%COMP%] {\n  width: 11rem;\n  font-size: 0.85rem;\n}\n/*# sourceMappingURL=delivery-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeliveryListComponent, { className: "DeliveryListComponent", filePath: "src/app/features/deliveries/delivery-list/delivery-list.component.ts", lineNumber: 16 });
})();

// src/app/features/deliveries/deliveries-routing.module.ts
var routes = [{ path: "", component: DeliveryListComponent, title: "Entregas \xB7 VRIA" }];
var DeliveriesRoutingModule = class _DeliveriesRoutingModule {
  static {
    this.\u0275fac = function DeliveriesRoutingModule_Factory(t) {
      return new (t || _DeliveriesRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DeliveriesRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/features/deliveries/deliveries.module.ts
var DeliveriesModule = class _DeliveriesModule {
  static {
    this.\u0275fac = function DeliveriesModule_Factory(t) {
      return new (t || _DeliveriesModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DeliveriesModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, DeliveriesRoutingModule] });
  }
};
export {
  DeliveriesModule
};
//# sourceMappingURL=chunk-U4PGVA7Q.js.map
