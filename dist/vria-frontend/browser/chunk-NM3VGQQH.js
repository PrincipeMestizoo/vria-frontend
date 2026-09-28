import {
  ProductService
} from "./chunk-4SVWG3CD.js";
import "./chunk-ILXFKMR3.js";
import {
  CategoryService
} from "./chunk-XMZNFBK4.js";
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
  DefaultValueAccessor,
  EmptyStateComponent,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MAT_DIALOG_DATA,
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
  MatHint,
  MatIcon,
  MatIconButton,
  MatInput,
  MatLabel,
  MatOption,
  MatPrefix,
  MatRow,
  MatRowDef,
  MatSelect,
  MatSuffix,
  MatTable,
  MatTooltip,
  MinValidator,
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

// src/app/features/products/product-form/product-form.component.ts
function ProductFormComponent_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorFor("nameProduct", "El nombre"));
  }
}
function ProductFormComponent_mat_option_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r2 = ctx.$implicit;
    \u0275\u0275property("value", category_r2.idCategory);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r2.nameCategory, " ");
  }
}
function ProductFormComponent_mat_hint_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-hint");
    \u0275\u0275text(1, " No hay categor\xEDas. Crea una primero. ");
    \u0275\u0275elementEnd();
  }
}
function ProductFormComponent_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorFor("idCategory", "La categor\xEDa"));
  }
}
function ProductFormComponent_mat_error_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorFor("stock", "El stock"));
  }
}
function ProductFormComponent_mat_error_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorFor("price", "El precio"));
  }
}
var ProductFormComponent = class _ProductFormComponent {
  constructor(fb, productService, categoryService, notification, dialogRef, data) {
    this.fb = fb;
    this.productService = productService;
    this.categoryService = categoryService;
    this.notification = notification;
    this.dialogRef = dialogRef;
    this.data = data;
    this.loading = false;
    this.loadingCategories = true;
    this.categories = [];
    this.form = this.fb.nonNullable.group({
      nameProduct: ["", [Validators.required]],
      idCategory: [null, [Validators.required]],
      stock: [0, [Validators.required, Validators.min(0)]],
      price: [0, [Validators.required, Validators.min(0.01)]],
      reference: [""],
      description: [""],
      photo: [""]
    });
    this.isEdit = !!data.product;
    if (data.product) {
      this.form.patchValue({
        nameProduct: data.product.nameProduct,
        idCategory: data.product.idCategory,
        stock: data.product.stock,
        price: data.product.price,
        reference: data.product.reference ?? "",
        description: data.product.description ?? "",
        photo: data.product.photo ?? ""
      });
    }
  }
  ngOnInit() {
    this.categoryService.findAll().pipe(finalize(() => this.loadingCategories = false)).subscribe((categories) => this.categories = categories);
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
      nameProduct: value.nameProduct,
      idCategory: value.idCategory,
      stock: value.stock,
      price: value.price,
      reference: value.reference || null,
      description: value.description || null,
      photo: value.photo || null
    };
    this.loading = true;
    const request$ = this.isEdit ? this.productService.update(this.data.product.idProduct, payload) : this.productService.create(payload);
    request$.pipe(finalize(() => this.loading = false)).subscribe({
      next: () => {
        this.notification.success(this.isEdit ? "Producto actualizado." : "Producto creado.");
        this.dialogRef.close(true);
      }
    });
  }
  cancel() {
    this.dialogRef.close(false);
  }
  static {
    this.\u0275fac = function ProductFormComponent_Factory(t) {
      return new (t || _ProductFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(CategoryService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductFormComponent, selectors: [["app-product-form"]], decls: 45, vars: 11, consts: [["mat-dialog-title", ""], [3, "ngSubmit", "formGroup"], ["appearance", "outline"], ["matInput", "", "formControlName", "nameProduct"], [4, "ngIf"], ["formControlName", "idCategory"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-row"], ["matInput", "", "type", "number", "min", "0", "formControlName", "stock"], ["matTextPrefix", ""], ["matInput", "", "type", "number", "min", "0", "step", "0.01", "formControlName", "price"], ["matInput", "", "formControlName", "reference"], ["matInput", "", "formControlName", "photo", "placeholder", "https://\u2026"], ["matInput", "", "rows", "3", "formControlName", "description"], ["align", "end"], ["mat-button", "", "type", "button", 3, "click"], [3, "label", "loading", "disabled"], [3, "value"]], template: function ProductFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "form", 1);
        \u0275\u0275listener("ngSubmit", function ProductFormComponent_Template_form_ngSubmit_2_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(3, "mat-dialog-content")(4, "mat-form-field", 2)(5, "mat-label");
        \u0275\u0275text(6, "Nombre del producto");
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "input", 3);
        \u0275\u0275template(8, ProductFormComponent_mat_error_8_Template, 2, 1, "mat-error", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "mat-form-field", 2)(10, "mat-label");
        \u0275\u0275text(11, "Categor\xEDa");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "mat-select", 5);
        \u0275\u0275template(13, ProductFormComponent_mat_option_13_Template, 2, 2, "mat-option", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, ProductFormComponent_mat_hint_14_Template, 2, 0, "mat-hint", 4)(15, ProductFormComponent_mat_error_15_Template, 2, 1, "mat-error", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 7)(17, "mat-form-field", 2)(18, "mat-label");
        \u0275\u0275text(19, "Stock");
        \u0275\u0275elementEnd();
        \u0275\u0275element(20, "input", 8);
        \u0275\u0275template(21, ProductFormComponent_mat_error_21_Template, 2, 1, "mat-error", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "mat-form-field", 2)(23, "mat-label");
        \u0275\u0275text(24, "Precio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "span", 9);
        \u0275\u0275text(26, "$\xA0");
        \u0275\u0275elementEnd();
        \u0275\u0275element(27, "input", 10);
        \u0275\u0275template(28, ProductFormComponent_mat_error_28_Template, 2, 1, "mat-error", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "mat-form-field", 2)(30, "mat-label");
        \u0275\u0275text(31, "Referencia");
        \u0275\u0275elementEnd();
        \u0275\u0275element(32, "input", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "mat-form-field", 2)(34, "mat-label");
        \u0275\u0275text(35, "URL de foto");
        \u0275\u0275elementEnd();
        \u0275\u0275element(36, "input", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "mat-form-field", 2)(38, "mat-label");
        \u0275\u0275text(39, "Descripci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275element(40, "textarea", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "mat-dialog-actions", 14)(42, "button", 15);
        \u0275\u0275listener("click", function ProductFormComponent_Template_button_click_42_listener() {
          return ctx.cancel();
        });
        \u0275\u0275text(43, "Cancelar");
        \u0275\u0275elementEnd();
        \u0275\u0275element(44, "app-submit-button", 16);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_7_0;
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.isEdit ? "Editar producto" : "Nuevo producto");
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", (tmp_2_0 = ctx.form.get("nameProduct")) == null ? null : tmp_2_0.invalid);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.categories);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loadingCategories && ctx.categories.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_5_0 = ctx.form.get("idCategory")) == null ? null : tmp_5_0.invalid);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", (tmp_6_0 = ctx.form.get("stock")) == null ? null : tmp_6_0.invalid);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", (tmp_7_0 = ctx.form.get("price")) == null ? null : tmp_7_0.invalid);
        \u0275\u0275advance(16);
        \u0275\u0275property("label", ctx.isEdit ? "Guardar cambios" : "Crear")("loading", ctx.loading)("disabled", ctx.form.invalid);
      }
    }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, MatButton, MatFormField, MatLabel, MatHint, MatError, MatPrefix, MatInput, MatSelect, MatOption, MatDialogTitle, MatDialogActions, MatDialogContent, SubmitButtonComponent], styles: ["\n\nmat-dialog-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  min-width: 24rem;\n}\n@media (max-width: 480px) {\n  mat-dialog-content[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0 1rem;\n}\n@media (max-width: 480px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=product-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductFormComponent, { className: "ProductFormComponent", filePath: "src/app/features/products/product-form/product-form.component.ts", lineNumber: 16 });
})();

// src/app/features/products/product-list/product-list.component.ts
function ProductListComponent_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function ProductListComponent_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openForm(null));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Nuevo producto ");
    \u0275\u0275elementEnd();
  }
}
function ProductListComponent_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 20);
    \u0275\u0275text(1, "Producto");
    \u0275\u0275elementEnd();
  }
}
function ProductListComponent_td_14_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Ref. ", row_r3.reference, "");
  }
}
function ProductListComponent_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21)(1, "div", 22)(2, "span", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ProductListComponent_td_14_span_4_Template, 2, 1, "span", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r3.nameProduct);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r3.reference);
  }
}
function ProductListComponent_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 20);
    \u0275\u0275text(1, "Categor\xEDa");
    \u0275\u0275elementEnd();
  }
}
function ProductListComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21)(1, "mat-chip", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.nameCategory);
  }
}
function ProductListComponent_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 20);
    \u0275\u0275text(1, "Stock");
    \u0275\u0275elementEnd();
  }
}
function ProductListComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21)(1, "span", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("stock-badge--low", row_r5.stock <= 5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.stock);
  }
}
function ProductListComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 20);
    \u0275\u0275text(1, "Precio");
    \u0275\u0275elementEnd();
  }
}
function ProductListComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(2, 1, row_r6.price, "COP", "symbol-narrow", "1.0-0"));
  }
}
function ProductListComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 20);
  }
}
function ProductListComponent_td_26_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function ProductListComponent_td_26_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const row_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openForm(row_r8));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
  }
}
function ProductListComponent_td_26_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function ProductListComponent_td_26_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const row_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.remove(row_r8));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function ProductListComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21)(1, "div", 28);
    \u0275\u0275template(2, ProductListComponent_td_26_button_2_Template, 3, 0, "button", 29)(3, ProductListComponent_td_26_button_3_Template, 3, 0, "button", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.canManage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canDelete);
  }
}
function ProductListComponent_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 33);
  }
}
function ProductListComponent_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 34);
  }
}
function ProductListComponent_app_empty_state_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 35);
  }
}
var ProductListComponent = class _ProductListComponent {
  constructor(productService, notification, dialog, confirmDialog, authService) {
    this.productService = productService;
    this.notification = notification;
    this.dialog = dialog;
    this.confirmDialog = confirmDialog;
    this.authService = authService;
    this.displayedColumns = ["nameProduct", "nameCategory", "stock", "price", "actions"];
    this.loading = true;
    this.products = [];
    this.filtered = [];
    this.searchTerm = "";
  }
  get canManage() {
    return this.authService.hasAnyRole(["ADMIN", "WAREHOUSE_KEEPER"]);
  }
  get canDelete() {
    return this.authService.hasAnyRole(["ADMIN", "WAREHOUSE_KEEPER"]);
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.productService.findAll().pipe(finalize(() => this.loading = false)).subscribe((data) => {
      this.products = data;
      this.applyFilter();
    });
  }
  applyFilter() {
    const term = this.searchTerm.trim().toLowerCase();
    this.filtered = term ? this.products.filter((p) => p.nameProduct.toLowerCase().includes(term) || p.nameCategory.toLowerCase().includes(term) || (p.reference || "").toLowerCase().includes(term)) : this.products;
  }
  openForm(product) {
    const ref = this.dialog.open(ProductFormComponent, {
      width: "520px",
      maxWidth: "95vw",
      data: { product },
      autoFocus: false
    });
    ref.afterClosed().subscribe((changed) => {
      if (changed) {
        this.load();
      }
    });
  }
  remove(product) {
    this.confirmDialog.confirm({
      title: "Eliminar producto",
      message: `\xBFSeguro que deseas eliminar "${product.nameProduct}"?`,
      danger: true,
      confirmLabel: "Eliminar"
    }).subscribe((confirmed) => {
      if (!confirmed) {
        return;
      }
      this.productService.delete(product.idProduct).subscribe(() => {
        this.notification.success("Producto eliminado.");
        this.load();
      });
    });
  }
  static {
    this.\u0275fac = function ProductListComponent_Factory(t) {
      return new (t || _ProductListComponent)(\u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(ConfirmDialogService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductListComponent, selectors: [["app-product-list"]], decls: 30, vars: 6, consts: [[1, "vria-page"], ["title", "Productos", "subtitle", "Cat\xE1logo digital de productos disponibles.", "icon", "inventory_2"], ["mat-flat-button", "", "color", "primary", "class", "vria-btn", 3, "click", 4, "ngIf"], [1, "list-toolbar"], ["appearance", "outline", 1, "list-toolbar__search"], ["matInput", "", "placeholder", "Nombre, categor\xEDa o referencia", 3, "ngModelChange", "ngModel"], ["matSuffix", ""], [1, "vria-card", "data-table-card"], ["mat-table", "", 1, "data-table", 3, "dataSource"], ["matColumnDef", "nameProduct"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nameCategory"], ["matColumnDef", "stock"], ["matColumnDef", "price"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "fade-row", 4, "matRowDef", "matRowDefColumns"], ["icon", "inventory_2", "title", "No hay productos", "message", "Agrega tu primer producto para comenzar a vender.", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", 1, "vria-btn", 3, "click"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "product-cell"], [1, "product-cell__name"], ["class", "product-cell__ref", 4, "ngIf"], [1, "product-cell__ref"], [1, "state-chip"], [1, "stock-badge"], [1, "cell-actions"], ["mat-icon-button", "", "class", "vria-btn-warning", "matTooltip", "Editar", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Eliminar", "color", "warn", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Editar", 1, "vria-btn-warning", 3, "click"], ["mat-icon-button", "", "matTooltip", "Eliminar", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 1, "fade-row"], ["icon", "inventory_2", "title", "No hay productos", "message", "Agrega tu primer producto para comenzar a vender."]], template: function ProductListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "app-page-header", 1);
        \u0275\u0275template(2, ProductListComponent_button_2_Template, 4, 0, "button", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3)(4, "mat-form-field", 4)(5, "mat-label");
        \u0275\u0275text(6, "Buscar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "input", 5);
        \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Template_input_ngModelChange_7_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function ProductListComponent_Template_input_ngModelChange_7_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "mat-icon", 6);
        \u0275\u0275text(9, "search");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 7)(11, "table", 8);
        \u0275\u0275elementContainerStart(12, 9);
        \u0275\u0275template(13, ProductListComponent_th_13_Template, 2, 0, "th", 10)(14, ProductListComponent_td_14_Template, 5, 2, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(15, 12);
        \u0275\u0275template(16, ProductListComponent_th_16_Template, 2, 0, "th", 10)(17, ProductListComponent_td_17_Template, 3, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(18, 13);
        \u0275\u0275template(19, ProductListComponent_th_19_Template, 2, 0, "th", 10)(20, ProductListComponent_td_20_Template, 3, 3, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(21, 14);
        \u0275\u0275template(22, ProductListComponent_th_22_Template, 2, 0, "th", 10)(23, ProductListComponent_td_23_Template, 3, 6, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(24, 15);
        \u0275\u0275template(25, ProductListComponent_th_25_Template, 1, 0, "th", 10)(26, ProductListComponent_td_26_Template, 4, 2, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(27, ProductListComponent_tr_27_Template, 1, 0, "tr", 16)(28, ProductListComponent_tr_28_Template, 1, 0, "tr", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275template(29, ProductListComponent_app_empty_state_29_Template, 1, 0, "app-empty-state", 18);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.canManage);
        \u0275\u0275advance(5);
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
    }, dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgModel, MatIcon, MatButton, MatIconButton, MatFormField, MatLabel, MatSuffix, MatInput, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatChip, MatTooltip, PageHeaderComponent, EmptyStateComponent, CurrencyPipe], styles: ["\n\n.product-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.product-cell__name[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.product-cell__ref[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--vria-text-secondary);\n}\n.stock-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 2.2rem;\n  padding: 0.2rem 0.6rem;\n  border-radius: 999px;\n  font-weight: 700;\n  background: rgba(0, 163, 224, 0.1);\n  color: var(--vria-blue-dark);\n  box-shadow: var(--vria-shadow-sm);\n}\n.stock-badge--low[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.12);\n  color: var(--vria-danger-dark);\n}\n/*# sourceMappingURL=product-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductListComponent, { className: "ProductListComponent", filePath: "src/app/features/products/product-list/product-list.component.ts", lineNumber: 16 });
})();

// src/app/features/products/products-routing.module.ts
var routes = [{ path: "", component: ProductListComponent, title: "Productos \xB7 VRIA" }];
var ProductsRoutingModule = class _ProductsRoutingModule {
  static {
    this.\u0275fac = function ProductsRoutingModule_Factory(t) {
      return new (t || _ProductsRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ProductsRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/features/products/products.module.ts
var ProductsModule = class _ProductsModule {
  static {
    this.\u0275fac = function ProductsModule_Factory(t) {
      return new (t || _ProductsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ProductsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, ProductsRoutingModule] });
  }
};
export {
  ProductsModule
};
//# sourceMappingURL=chunk-NM3VGQQH.js.map
