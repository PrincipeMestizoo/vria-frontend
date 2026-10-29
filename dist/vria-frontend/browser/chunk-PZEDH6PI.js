import {
  STOCK_LEVEL_LABELS,
  getStockLevel
} from "./chunk-6PUFV6PR.js";
import {
  ProductService
} from "./chunk-OC3SX2LR.js";
import {
  ConfirmDialogService
} from "./chunk-SAFX4BGQ.js";
import {
  firstErrorMessage
} from "./chunk-5N3PECVO.js";
import {
  NotificationService
} from "./chunk-H7V4PXNT.js";
import {
  DefaultValueAccessor,
  EmptyStateComponent,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MAT_DIALOG_DATA,
  MatButton,
  MatDialog,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
  MatError,
  MatFormField,
  MatIcon,
  MatIconButton,
  MatInput,
  MatLabel,
  MatSuffix,
  MatTooltip,
  MaxValidator,
  MinValidator,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModel,
  NumberValueAccessor,
  PageHeaderComponent,
  RouterModule,
  SharedModule,
  SubmitButtonComponent,
  Validators,
  finalize,
  listStagger,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IREKQD7O.js";

// src/app/features/stock-out/stock-out-dialog/stock-out-dialog.component.ts
function StockOutDialogComponent_img_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 24);
    \u0275\u0275listener("error", function StockOutDialogComponent_img_6_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.imageFailed = true);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r2.product.photo, \u0275\u0275sanitizeUrl)("alt", ctx_r2.product.nameProduct);
  }
}
function StockOutDialogComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "image_not_supported");
    \u0275\u0275elementEnd();
  }
}
function StockOutDialogComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 Ref. ", ctx_r2.product.reference, "");
  }
}
function StockOutDialogComponent_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.quantityError);
  }
}
function StockOutDialogComponent_span_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275element(1, "span", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Quedar\xE1 en: ", ctx_r2.remainingStock === 0 ? "Agotado" : ctx_r2.levelLabels[ctx_r2.remainingLevel], " ");
  }
}
var StockOutDialogComponent = class _StockOutDialogComponent {
  constructor(fb, productService, notification, confirmDialog, dialogRef, data) {
    this.fb = fb;
    this.productService = productService;
    this.notification = notification;
    this.confirmDialog = confirmDialog;
    this.dialogRef = dialogRef;
    this.levelLabels = STOCK_LEVEL_LABELS;
    this.loading = false;
    this.form = this.fb.nonNullable.group({
      quantity: [1, [Validators.required, Validators.min(1)]]
    });
    this.product = data.product;
    this.imageFailed = !data.product.photo;
    this.form.controls.quantity.addValidators(Validators.max(data.product.stock));
  }
  get quantity() {
    return Number(this.form.controls.quantity.value) || 0;
  }
  // Stock con el que quedaria el producto tras la salida
  get remainingStock() {
    return Math.max(this.product.stock - this.quantity, 0);
  }
  get remainingLevel() {
    return getStockLevel(this.remainingStock);
  }
  get quantityError() {
    const control = this.form.controls.quantity;
    if (control.hasError("max")) {
      return `Solo hay ${this.product.stock} und. disponibles.`;
    }
    return firstErrorMessage(control, "La cantidad");
  }
  setAll() {
    this.form.controls.quantity.setValue(this.product.stock);
    this.form.controls.quantity.markAsTouched();
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const quantity = this.quantity;
    this.confirmDialog.confirm({
      title: "Confirmar salida de stock",
      message: `Se descontar\xE1n ${quantity} und. de "${this.product.nameProduct}". El stock pasar\xE1 de ${this.product.stock} a ${this.remainingStock} und. \xBFDeseas continuar?`,
      confirmLabel: "S\xED, registrar"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.reduce(quantity);
      }
    });
  }
  cancel() {
    this.dialogRef.close();
  }
  reduce(quantity) {
    this.loading = true;
    this.productService.reduceStock(this.product.idProduct, quantity).pipe(finalize(() => this.loading = false)).subscribe((updated) => {
      this.notification.success(`Salida registrada: ${quantity} und. de ${updated.nameProduct}. Stock actual: ${updated.stock} und.`);
      this.dialogRef.close(updated);
    });
  }
  static {
    this.\u0275fac = function StockOutDialogComponent_Factory(t) {
      return new (t || _StockOutDialogComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ConfirmDialogService), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StockOutDialogComponent, selectors: [["app-stock-out-dialog"]], decls: 46, vars: 17, consts: [["noImage", ""], ["mat-dialog-title", ""], [3, "ngSubmit", "formGroup"], [1, "product-summary"], [1, "product-summary__media"], [3, "src", "alt", "error", 4, "ngIf", "ngIfElse"], [1, "product-summary__info"], [1, "product-summary__label"], [1, "product-summary__name"], [1, "product-summary__meta"], [4, "ngIf"], [1, "form-row"], ["appearance", "outline"], ["matInput", "", "readonly", "", 3, "value"], ["matSuffix", ""], ["matInput", "", "type", "number", "min", "1", "formControlName", "quantity", "cdkFocusInitial", "", 3, "max"], ["mat-button", "", "matSuffix", "", "type", "button", 1, "all-button", 3, "click", "disabled"], [1, "stock-preview", 3, "ngClass"], [1, "stock-preview__values"], [1, "stock-preview__unit"], ["class", "stock-preview__label", 4, "ngIf"], ["align", "end"], ["mat-button", "", "type", "button", 3, "click", "disabled"], ["label", "Enviar", "loadingLabel", "Enviando\u2026", "icon", "send", 3, "loading", "disabled"], [3, "error", "src", "alt"], [1, "stock-preview__label"], [1, "stock-preview__dot"]], template: function StockOutDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "h2", 1);
        \u0275\u0275text(1, "Registrar salida de stock");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "form", 2);
        \u0275\u0275listener("ngSubmit", function StockOutDialogComponent_Template_form_ngSubmit_2_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.submit());
        });
        \u0275\u0275elementStart(3, "mat-dialog-content")(4, "section", 3)(5, "div", 4);
        \u0275\u0275template(6, StockOutDialogComponent_img_6_Template, 1, 2, "img", 5)(7, StockOutDialogComponent_ng_template_7_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 6)(10, "span", 7);
        \u0275\u0275text(11, "Producto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "span", 8);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span", 9);
        \u0275\u0275text(15);
        \u0275\u0275template(16, StockOutDialogComponent_ng_container_16_Template, 2, 1, "ng-container", 10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 11)(18, "mat-form-field", 12)(19, "mat-label");
        \u0275\u0275text(20, "Stock actual");
        \u0275\u0275elementEnd();
        \u0275\u0275element(21, "input", 13);
        \u0275\u0275elementStart(22, "mat-icon", 14);
        \u0275\u0275text(23, "inventory_2");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "mat-form-field", 12)(25, "mat-label");
        \u0275\u0275text(26, "Cantidad a reducir");
        \u0275\u0275elementEnd();
        \u0275\u0275element(27, "input", 15);
        \u0275\u0275elementStart(28, "button", 16);
        \u0275\u0275listener("click", function StockOutDialogComponent_Template_button_click_28_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setAll());
        });
        \u0275\u0275text(29, " Todo ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(30, StockOutDialogComponent_mat_error_30_Template, 2, 1, "mat-error", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 17)(32, "div", 18)(33, "span");
        \u0275\u0275text(34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "mat-icon");
        \u0275\u0275text(36, "arrow_forward");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "strong");
        \u0275\u0275text(38);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "span", 19);
        \u0275\u0275text(40, "und.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(41, StockOutDialogComponent_span_41_Template, 3, 1, "span", 20);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "mat-dialog-actions", 21)(43, "button", 22);
        \u0275\u0275listener("click", function StockOutDialogComponent_Template_button_click_43_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.cancel());
        });
        \u0275\u0275text(44, "Cancelar");
        \u0275\u0275elementEnd();
        \u0275\u0275element(45, "app-submit-button", 23);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const noImage_r4 = \u0275\u0275reference(8);
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", !ctx.imageFailed)("ngIfElse", noImage_r4);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.product.nameProduct);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.product.nameCategory, "");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.product.reference);
        \u0275\u0275advance(5);
        \u0275\u0275property("value", ctx.product.stock + " und.");
        \u0275\u0275advance(6);
        \u0275\u0275property("max", ctx.product.stock);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.form.controls.quantity.invalid);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", "stock-preview--" + ctx.remainingLevel.toLowerCase());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.product.stock);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.form.valid ? ctx.remainingStock : "\u2014");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.form.valid);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance(2);
        \u0275\u0275property("loading", ctx.loading)("disabled", ctx.form.invalid);
      }
    }, dependencies: [NgClass, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName, MatIcon, MatButton, MatFormField, MatLabel, MatError, MatSuffix, MatInput, MatDialogTitle, MatDialogActions, MatDialogContent, SubmitButtonComponent], styles: ["\n\nmat-dialog-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  min-width: 30rem;\n}\n@media (max-width: 560px) {\n  mat-dialog-content[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n}\n.product-summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.75rem;\n  border-radius: var(--vria-radius-lg);\n  background: var(--vria-surface-alt);\n}\n.product-summary__media[_ngcontent-%COMP%] {\n  flex: 0 0 5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 5rem;\n  height: 5rem;\n  overflow: hidden;\n  border-radius: var(--vria-radius-lg);\n  background: var(--vria-surface);\n  color: var(--vria-text-secondary);\n}\n.product-summary__media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.product-summary__info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.product-summary__label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--vria-text-secondary);\n}\n.product-summary__name[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 600;\n  color: var(--vria-text-primary);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.product-summary__meta[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--vria-text-secondary);\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0 1rem;\n}\n@media (max-width: 480px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.all-button[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n}\n.stock-preview[_ngcontent-%COMP%] {\n  --lamp: var(--vria-text-secondary);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n  padding: 0.85rem 1rem;\n  border-left: 4px solid var(--lamp);\n  border-radius: var(--vria-radius-lg);\n  background: var(--vria-surface-alt);\n}\n.stock-preview--ok[_ngcontent-%COMP%] {\n  --lamp: var(--vria-success);\n}\n.stock-preview--low[_ngcontent-%COMP%] {\n  --lamp: var(--vria-warning);\n}\n.stock-preview--critical[_ngcontent-%COMP%] {\n  --lamp: var(--vria-danger);\n}\n.stock-preview__values[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 1.1rem;\n  color: var(--vria-text-secondary);\n}\n.stock-preview__values[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--vria-text-primary);\n}\n.stock-preview__values[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.stock-preview__unit[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.stock-preview__label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--vria-text-primary);\n}\n.stock-preview__dot[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background: var(--lamp);\n  box-shadow: 0 0 8px var(--lamp);\n}\n/*# sourceMappingURL=stock-out-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StockOutDialogComponent, { className: "StockOutDialogComponent", filePath: "src/app/features/stock-out/stock-out-dialog/stock-out-dialog.component.ts", lineNumber: 17 });
})();

// src/app/features/stock-out/stock-out-form/stock-out-form.component.ts
var _c0 = () => [];
function StockOutFormComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function StockOutFormComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.searchTerm = "";
      return \u0275\u0275resetView(ctx_r2.applyFilter());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function StockOutFormComponent_mat_icon_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 19);
    \u0275\u0275text(1, "search");
    \u0275\u0275elementEnd();
  }
}
function StockOutFormComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "div", 23);
    \u0275\u0275elementStart(2, "div", 24);
    \u0275\u0275element(3, "span", 25)(4, "span", 26);
    \u0275\u0275elementEnd()();
  }
}
function StockOutFormComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, StockOutFormComponent_div_9_div_1_Template, 5, 0, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0).constructor(6));
  }
}
function StockOutFormComponent_div_10_button_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 36);
    \u0275\u0275listener("error", function StockOutFormComponent_div_10_button_1_img_2_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r6);
      const card_r5 = \u0275\u0275nextContext().$implicit;
      return \u0275\u0275resetView(card_r5.imageFailed = true);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", card_r5.product.photo, \u0275\u0275sanitizeUrl)("alt", card_r5.product.nameProduct);
  }
}
function StockOutFormComponent_div_10_button_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "mat-icon");
    \u0275\u0275text(2, "image_not_supported");
    \u0275\u0275elementEnd()();
  }
}
function StockOutFormComponent_div_10_button_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38)(1, "mat-icon");
    \u0275\u0275text(2, "check");
    \u0275\u0275elementEnd()();
  }
}
function StockOutFormComponent_div_10_button_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Ref. ", card_r5.product.reference, "");
  }
}
function StockOutFormComponent_div_10_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function StockOutFormComponent_div_10_button_1_Template_button_click_0_listener() {
      const card_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.select(card_r5));
    });
    \u0275\u0275elementStart(1, "div", 23);
    \u0275\u0275template(2, StockOutFormComponent_div_10_button_1_img_2_Template, 1, 2, "img", 29)(3, StockOutFormComponent_div_10_button_1_ng_template_3_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(5, "span", 30);
    \u0275\u0275element(6, "span", 31);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, StockOutFormComponent_div_10_button_1_span_8_Template, 3, 0, "span", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 24)(10, "span", 33);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, StockOutFormComponent_div_10_button_1_span_12_Template, 2, 1, "span", 34);
    \u0275\u0275elementStart(13, "span", 35)(14, "mat-icon");
    \u0275\u0275text(15, "inventory_2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const card_r5 = ctx.$implicit;
    const noImage_r7 = \u0275\u0275reference(4);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("product-card--selected", ctx_r2.selected === card_r5);
    \u0275\u0275property("ngClass", "product-card--" + card_r5.level.toLowerCase())("disabled", card_r5.product.stock <= 0);
    \u0275\u0275attribute("aria-pressed", ctx_r2.selected === card_r5);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !card_r5.imageFailed)("ngIfElse", noImage_r7);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", card_r5.product.stock <= 0 ? "Agotado" : ctx_r2.levelLabels[card_r5.level], " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selected === card_r5);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", card_r5.product.nameProduct);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", card_r5.product.nameProduct, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", card_r5.product.reference);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", card_r5.product.stock, " und. ");
  }
}
function StockOutFormComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, StockOutFormComponent_div_10_button_1_Template, 17, 13, "button", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("@listStagger", ctx_r2.searchTerm);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.filtered)("ngForTrackBy", ctx_r2.trackById);
  }
}
function StockOutFormComponent_app_empty_state_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 40);
  }
}
function StockOutFormComponent_app_empty_state_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 41);
  }
}
function StockOutFormComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 42);
    \u0275\u0275text(2, "Producto seleccionado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 43);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 44);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selected.product.nameProduct);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Stock actual: ", ctx_r2.selected.product.stock, " und.");
  }
}
function StockOutFormComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45)(1, "mat-icon");
    \u0275\u0275text(2, "touch_app");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Selecciona un producto para registrar su salida. ");
    \u0275\u0275elementEnd();
  }
}
function StockOutFormComponent_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function StockOutFormComponent_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selected = null);
    });
    \u0275\u0275text(1, "Cancelar");
    \u0275\u0275elementEnd();
  }
}
var StockOutFormComponent = class _StockOutFormComponent {
  constructor(productService, dialog) {
    this.productService = productService;
    this.dialog = dialog;
    this.levelLabels = STOCK_LEVEL_LABELS;
    this.loading = true;
    this.cards = [];
    this.filtered = [];
    this.selected = null;
    this.searchTerm = "";
  }
  ngOnInit() {
    this.productService.findAll().pipe(finalize(() => this.loading = false)).subscribe((products) => {
      this.cards = products.map((product) => ({
        product,
        level: getStockLevel(product.stock),
        imageFailed: !product.photo
      }));
      this.applyFilter();
    });
  }
  applyFilter() {
    const term = this.searchTerm.trim().toLowerCase();
    this.filtered = this.cards.filter(({ product }) => !term || product.nameProduct.toLowerCase().includes(term) || (product.reference ?? "").toLowerCase().includes(term));
  }
  // Seleccion unica: tocar la tarjeta seleccionada la deselecciona
  select(card) {
    if (card.product.stock <= 0) {
      return;
    }
    this.selected = this.selected === card ? null : card;
  }
  openForm() {
    const card = this.selected;
    if (!card) {
      return;
    }
    const ref = this.dialog.open(StockOutDialogComponent, {
      width: "600px",
      maxWidth: "95vw",
      data: { product: card.product }
    });
    ref.afterClosed().subscribe((updated) => {
      if (!updated) {
        return;
      }
      card.product = updated;
      card.level = getStockLevel(updated.stock);
      this.selected = null;
    });
  }
  trackById(_, card) {
    return card.product.idProduct;
  }
  static {
    this.\u0275fac = function StockOutFormComponent_Factory(t) {
      return new (t || _StockOutFormComponent)(\u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StockOutFormComponent, selectors: [["app-stock-out-form"]], decls: 24, vars: 11, consts: [["noSelection", ""], ["noImage", ""], [1, "vria-page"], ["title", "Salida de stock", "subtitle", "Selecciona un producto y registra la cantidad que sale de bodega.", "icon", "outbox"], [1, "list-toolbar"], ["appearance", "outline", 1, "list-toolbar__search"], ["matInput", "", "placeholder", "Nombre o referencia", 3, "ngModelChange", "ngModel"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Limpiar b\xFAsqueda", 3, "click", 4, "ngIf"], ["matSuffix", "", 4, "ngIf"], ["class", "product-grid", 4, "ngIf"], ["icon", "inventory_2", "title", "No hay productos", "message", "A\xFAn no hay productos registrados en bodega.", 4, "ngIf"], ["icon", "search_off", "title", "Sin resultados", "message", "Ning\xFAn producto coincide con la b\xFAsqueda.", 4, "ngIf"], [1, "action-bar", "vria-card"], [1, "action-bar__info"], [4, "ngIf", "ngIfElse"], [1, "action-bar__actions"], ["mat-button", "", "type", "button", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "vria-btn", 3, "click", "disabled"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Limpiar b\xFAsqueda", 3, "click"], ["matSuffix", ""], [1, "product-grid"], ["class", "product-card product-card--skeleton", 4, "ngFor", "ngForOf"], [1, "product-card", "product-card--skeleton"], [1, "product-card__media"], [1, "product-card__body"], [1, "skeleton-line"], [1, "skeleton-line", "skeleton-line--short"], ["type", "button", "class", "product-card", 3, "ngClass", "product-card--selected", "disabled", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "button", 1, "product-card", 3, "click", "ngClass", "disabled"], ["loading", "lazy", 3, "src", "alt", "error", 4, "ngIf", "ngIfElse"], [1, "stock-badge"], [1, "stock-badge__dot"], ["class", "product-card__check", 4, "ngIf"], [1, "product-card__name", 3, "matTooltip"], ["class", "product-card__ref", 4, "ngIf"], [1, "product-card__stock"], ["loading", "lazy", 3, "error", "src", "alt"], [1, "product-card__placeholder"], [1, "product-card__check"], [1, "product-card__ref"], ["icon", "inventory_2", "title", "No hay productos", "message", "A\xFAn no hay productos registrados en bodega."], ["icon", "search_off", "title", "Sin resultados", "message", "Ning\xFAn producto coincide con la b\xFAsqueda."], [1, "action-bar__label"], [1, "action-bar__name"], [1, "action-bar__stock"], [1, "action-bar__hint"], ["mat-button", "", "type", "button", 3, "click"]], template: function StockOutFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2);
        \u0275\u0275element(1, "app-page-header", 3);
        \u0275\u0275elementStart(2, "div", 4)(3, "mat-form-field", 5)(4, "mat-label");
        \u0275\u0275text(5, "Buscar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function StockOutFormComponent_Template_input_ngModelChange_6_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function StockOutFormComponent_Template_input_ngModelChange_6_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.applyFilter());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, StockOutFormComponent_button_7_Template, 3, 0, "button", 7)(8, StockOutFormComponent_mat_icon_8_Template, 2, 0, "mat-icon", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, StockOutFormComponent_div_9_Template, 2, 2, "div", 9)(10, StockOutFormComponent_div_10_Template, 2, 3, "div", 9)(11, StockOutFormComponent_app_empty_state_11_Template, 1, 0, "app-empty-state", 10)(12, StockOutFormComponent_app_empty_state_12_Template, 1, 0, "app-empty-state", 11);
        \u0275\u0275elementStart(13, "div", 12)(14, "div", 13);
        \u0275\u0275template(15, StockOutFormComponent_ng_container_15_Template, 7, 2, "ng-container", 14)(16, StockOutFormComponent_ng_template_16_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 15);
        \u0275\u0275template(19, StockOutFormComponent_button_19_Template, 2, 0, "button", 16);
        \u0275\u0275elementStart(20, "button", 17);
        \u0275\u0275listener("click", function StockOutFormComponent_Template_button_click_20_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openForm());
        });
        \u0275\u0275elementStart(21, "mat-icon");
        \u0275\u0275text(22, "outbox");
        \u0275\u0275elementEnd();
        \u0275\u0275text(23, " Registrar salida ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        const noSelection_r9 = \u0275\u0275reference(17);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.searchTerm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.searchTerm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.filtered.length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.cards.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.cards.length > 0 && ctx.filtered.length === 0);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.selected)("ngIfElse", noSelection_r9);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.selected);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.selected);
      }
    }, dependencies: [NgClass, NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, MatIcon, MatButton, MatIconButton, MatFormField, MatLabel, MatSuffix, MatInput, MatTooltip, PageHeaderComponent, EmptyStateComponent], styles: ["\n\n.product-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 1.25rem;\n  padding: 0.25rem 0.25rem 1rem;\n}\n@media (max-width: 1200px) {\n  .product-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n@media (max-width: 900px) {\n  .product-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 520px) {\n  .product-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.product-card[_ngcontent-%COMP%] {\n  --lamp: var(--vria-text-secondary);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  padding: 0;\n  border: 2px solid transparent;\n  font: inherit;\n  text-align: left;\n  color: inherit;\n  cursor: pointer;\n  background: var(--vria-surface);\n  border-radius: var(--vria-radius-lg);\n  box-shadow: var(--vria-shadow);\n  transition:\n    transform 260ms cubic-bezier(0.22, 1, 0.36, 1),\n    box-shadow 260ms cubic-bezier(0.22, 1, 0.36, 1),\n    border-color 200ms ease;\n}\n.product-card--ok[_ngcontent-%COMP%] {\n  --lamp: var(--vria-success);\n}\n.product-card--low[_ngcontent-%COMP%] {\n  --lamp: var(--vria-warning);\n}\n.product-card--critical[_ngcontent-%COMP%] {\n  --lamp: var(--vria-danger);\n}\n.product-card[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-4px);\n  box-shadow: var(--vria-shadow-hover);\n}\n.product-card[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid var(--vria-purple);\n  outline-offset: 2px;\n}\n.product-card--selected[_ngcontent-%COMP%] {\n  border-color: var(--vria-purple);\n}\n.product-card[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.55;\n}\n.product-card__media[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 4/3;\n  overflow: hidden;\n  background: var(--vria-surface-alt);\n}\n.product-card__media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.product-card__placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  color: var(--vria-text-secondary);\n}\n.product-card__placeholder[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  width: 3rem;\n  height: 3rem;\n  opacity: 0.5;\n}\n.product-card__check[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.75rem;\n  right: 0.75rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  color: #fff;\n  background: var(--vria-gradient);\n  box-shadow: var(--vria-shadow-sm);\n}\n.product-card__body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n  padding: 0.85rem 1rem 1rem;\n  flex: 1;\n}\n.product-card__name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.product-card__ref[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--vria-text-secondary);\n}\n.product-card__stock[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  margin-top: auto;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--lamp);\n}\n.product-card__stock[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.stock-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.75rem;\n  left: 0.75rem;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.3rem 0.7rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--vria-text-primary);\n  background: color-mix(in srgb, var(--vria-surface) 88%, transparent);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  box-shadow: var(--vria-shadow-sm);\n}\n.stock-badge__dot[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background: var(--lamp);\n  box-shadow: 0 0 8px var(--lamp);\n}\n.product-card--skeleton[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.product-card--skeleton[_ngcontent-%COMP%]   .product-card__media[_ngcontent-%COMP%], .product-card--skeleton[_ngcontent-%COMP%]   .skeleton-line[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_stock-out-shimmer 1.4s ease-in-out infinite;\n}\n.skeleton-line[_ngcontent-%COMP%] {\n  display: block;\n  height: 0.9rem;\n  border-radius: 6px;\n  background: var(--vria-surface-alt);\n}\n.skeleton-line--short[_ngcontent-%COMP%] {\n  width: 45%;\n}\n@keyframes _ngcontent-%COMP%_stock-out-shimmer {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n.action-bar[_ngcontent-%COMP%] {\n  position: sticky;\n  bottom: 1rem;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-top: 0.5rem;\n  padding: 0.85rem 1.25rem;\n}\n.action-bar__info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.action-bar__label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--vria-text-secondary);\n}\n.action-bar__name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.action-bar__stock[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--vria-text-secondary);\n}\n.action-bar__hint[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: var(--vria-text-secondary);\n}\n.action-bar__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-left: auto;\n}\n@media (prefers-reduced-motion: reduce) {\n  .product-card[_ngcontent-%COMP%] {\n    transition: none;\n  }\n  .product-card[_ngcontent-%COMP%]:hover:not(:disabled) {\n    transform: none;\n  }\n  .product-card--skeleton[_ngcontent-%COMP%]   .product-card__media[_ngcontent-%COMP%], .skeleton-line[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=stock-out-form.component.css.map */"], data: { animation: [listStagger] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StockOutFormComponent, { className: "StockOutFormComponent", filePath: "src/app/features/stock-out/stock-out-form/stock-out-form.component.ts", lineNumber: 22 });
})();

// src/app/features/stock-out/stock-out-routing.module.ts
var routes = [{ path: "", component: StockOutFormComponent, title: "Salida de stock \xB7 VRIA" }];
var StockOutRoutingModule = class _StockOutRoutingModule {
  static {
    this.\u0275fac = function StockOutRoutingModule_Factory(t) {
      return new (t || _StockOutRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _StockOutRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/features/stock-out/stock-out.module.ts
var StockOutModule = class _StockOutModule {
  static {
    this.\u0275fac = function StockOutModule_Factory(t) {
      return new (t || _StockOutModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _StockOutModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, StockOutRoutingModule] });
  }
};
export {
  StockOutModule
};
//# sourceMappingURL=chunk-PZEDH6PI.js.map
