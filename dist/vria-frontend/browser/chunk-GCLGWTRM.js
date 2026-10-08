import {
  CategoryService
} from "./chunk-YG5XQF3J.js";
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
  DefaultValueAccessor,
  EmptyStateComponent,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MAT_DIALOG_DATA,
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
  MatRow,
  MatRowDef,
  MatSuffix,
  MatTable,
  MatTooltip,
  NgControlStatus,
  NgControlStatusGroup,
  NgIf,
  NgModel,
  PageHeaderComponent,
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
} from "./chunk-UK26UTD3.js";

// src/app/features/categories/category-form/category-form.component.ts
function CategoryFormComponent_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorFor("nameCategory", "El nombre"), " ");
  }
}
var CategoryFormComponent = class _CategoryFormComponent {
  constructor(fb, categoryService, notification, dialogRef, data) {
    this.fb = fb;
    this.categoryService = categoryService;
    this.notification = notification;
    this.dialogRef = dialogRef;
    this.data = data;
    this.loading = false;
    this.form = this.fb.nonNullable.group({
      nameCategory: ["", [Validators.required]]
    });
    this.isEdit = !!data.category;
    if (data.category) {
      this.form.patchValue({
        nameCategory: data.category.nameCategory
      });
    }
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
      idCategory: this.data.category?.idCategory ?? null,
      nameCategory: value.nameCategory
    };
    this.loading = true;
    const request$ = this.isEdit ? this.categoryService.update(payload.idCategory, payload) : this.categoryService.create(payload);
    request$.pipe(finalize(() => this.loading = false)).subscribe({
      next: () => {
        this.notification.success(this.isEdit ? "Categor\xEDa actualizada." : "Categor\xEDa creada.");
        this.dialogRef.close(true);
      }
    });
  }
  cancel() {
    this.dialogRef.close(false);
  }
  static {
    this.\u0275fac = function CategoryFormComponent_Factory(t) {
      return new (t || _CategoryFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CategoryService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryFormComponent, selectors: [["app-category-form"]], decls: 13, vars: 6, consts: [["mat-dialog-title", ""], [3, "ngSubmit", "formGroup"], ["appearance", "outline"], ["matInput", "", "formControlName", "nameCategory"], [4, "ngIf"], ["align", "end"], ["mat-button", "", "type", "button", 3, "click"], [3, "label", "loading", "disabled"]], template: function CategoryFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "form", 1);
        \u0275\u0275listener("ngSubmit", function CategoryFormComponent_Template_form_ngSubmit_2_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(3, "mat-dialog-content")(4, "mat-form-field", 2)(5, "mat-label");
        \u0275\u0275text(6, "Nombre");
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "input", 3);
        \u0275\u0275template(8, CategoryFormComponent_mat_error_8_Template, 2, 1, "mat-error", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "mat-dialog-actions", 5)(10, "button", 6);
        \u0275\u0275listener("click", function CategoryFormComponent_Template_button_click_10_listener() {
          return ctx.cancel();
        });
        \u0275\u0275text(11, "Cancelar");
        \u0275\u0275elementEnd();
        \u0275\u0275element(12, "app-submit-button", 7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_2_0;
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.isEdit ? "Editar categor\xEDa" : "Nueva categor\xEDa");
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", (tmp_2_0 = ctx.form.get("nameCategory")) == null ? null : tmp_2_0.invalid);
        \u0275\u0275advance(4);
        \u0275\u0275property("label", ctx.isEdit ? "Guardar cambios" : "Crear")("loading", ctx.loading)("disabled", ctx.form.invalid);
      }
    }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatButton, MatFormField, MatLabel, MatError, MatInput, MatDialogTitle, MatDialogActions, MatDialogContent, SubmitButtonComponent], styles: ["\n\nmat-dialog-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  min-width: 22rem;\n}\n@media (max-width: 480px) {\n  mat-dialog-content[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=category-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryFormComponent, { className: "CategoryFormComponent", filePath: "src/app/features/categories/category-form/category-form.component.ts", lineNumber: 15 });
})();

// src/app/features/categories/category-list/category-list.component.ts
function CategoryListComponent_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function CategoryListComponent_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openForm(null));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Nueva categor\xEDa ");
    \u0275\u0275elementEnd();
  }
}
function CategoryListComponent_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 17);
    \u0275\u0275text(1, "Nombre");
    \u0275\u0275elementEnd();
  }
}
function CategoryListComponent_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r3.nameCategory);
  }
}
function CategoryListComponent_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 17);
  }
}
function CategoryListComponent_td_17_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function CategoryListComponent_td_17_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const row_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openForm(row_r5));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
  }
}
function CategoryListComponent_td_17_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function CategoryListComponent_td_17_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const row_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.remove(row_r5));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function CategoryListComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 18)(1, "div", 19);
    \u0275\u0275template(2, CategoryListComponent_td_17_button_2_Template, 3, 0, "button", 20)(3, CategoryListComponent_td_17_button_3_Template, 3, 0, "button", 21);
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
function CategoryListComponent_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 24);
  }
}
function CategoryListComponent_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 25);
  }
}
function CategoryListComponent_app_empty_state_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 26);
  }
}
var CategoryListComponent = class _CategoryListComponent {
  constructor(categoryService, notification, dialog, confirmDialog, authService) {
    this.categoryService = categoryService;
    this.notification = notification;
    this.dialog = dialog;
    this.confirmDialog = confirmDialog;
    this.authService = authService;
    this.displayedColumns = ["nameCategory", "actions"];
    this.loading = true;
    this.categories = [];
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
    this.categoryService.findAll().pipe(finalize(() => this.loading = false)).subscribe((data) => {
      this.categories = data;
      this.applyFilter();
    });
  }
  applyFilter() {
    const term = this.searchTerm.trim().toLowerCase();
    this.filtered = term ? this.categories.filter((c) => c.nameCategory.toLowerCase().includes(term)) : this.categories;
  }
  openForm(category) {
    const ref = this.dialog.open(CategoryFormComponent, {
      width: "460px",
      maxWidth: "95vw",
      data: { category },
      autoFocus: false
    });
    ref.afterClosed().subscribe((changed) => {
      if (changed) {
        this.load();
      }
    });
  }
  remove(category) {
    this.confirmDialog.confirm({
      title: "Eliminar categor\xEDa",
      message: `\xBFSeguro que deseas eliminar "${category.nameCategory}"?`,
      danger: true,
      confirmLabel: "Eliminar"
    }).subscribe((confirmed) => {
      if (!confirmed || category.idCategory == null) {
        return;
      }
      this.categoryService.delete(category.idCategory).subscribe(() => {
        this.notification.success("Categor\xEDa eliminada.");
        this.load();
      });
    });
  }
  static {
    this.\u0275fac = function CategoryListComponent_Factory(t) {
      return new (t || _CategoryListComponent)(\u0275\u0275directiveInject(CategoryService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(ConfirmDialogService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryListComponent, selectors: [["app-category-list"]], decls: 21, vars: 6, consts: [[1, "vria-page"], ["title", "Categor\xEDas", "subtitle", "Organiza el cat\xE1logo de productos por categor\xEDa.", "icon", "category"], ["mat-flat-button", "", "color", "primary", "class", "vria-btn", 3, "click", 4, "ngIf"], [1, "list-toolbar"], ["appearance", "outline", 1, "list-toolbar__search"], ["matInput", "", "placeholder", "Nombre de categor\xEDa", 3, "ngModelChange", "ngModel"], ["matSuffix", ""], [1, "vria-card", "data-table-card"], ["mat-table", "", 1, "data-table", 3, "dataSource"], ["matColumnDef", "nameCategory"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "fade-row", 4, "matRowDef", "matRowDefColumns"], ["icon", "category", "title", "No hay categor\xEDas", "message", "Crea la primera categor\xEDa para tu cat\xE1logo de productos.", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", 1, "vria-btn", 3, "click"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "cell-actions"], ["mat-icon-button", "", "class", "vria-btn-warning", "matTooltip", "Editar", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Eliminar", "color", "warn", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Editar", 1, "vria-btn-warning", 3, "click"], ["mat-icon-button", "", "matTooltip", "Eliminar", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 1, "fade-row"], ["icon", "category", "title", "No hay categor\xEDas", "message", "Crea la primera categor\xEDa para tu cat\xE1logo de productos."]], template: function CategoryListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "app-page-header", 1);
        \u0275\u0275template(2, CategoryListComponent_button_2_Template, 4, 0, "button", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3)(4, "mat-form-field", 4)(5, "mat-label");
        \u0275\u0275text(6, "Buscar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "input", 5);
        \u0275\u0275twoWayListener("ngModelChange", function CategoryListComponent_Template_input_ngModelChange_7_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function CategoryListComponent_Template_input_ngModelChange_7_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "mat-icon", 6);
        \u0275\u0275text(9, "search");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 7)(11, "table", 8);
        \u0275\u0275elementContainerStart(12, 9);
        \u0275\u0275template(13, CategoryListComponent_th_13_Template, 2, 0, "th", 10)(14, CategoryListComponent_td_14_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(15, 12);
        \u0275\u0275template(16, CategoryListComponent_th_16_Template, 1, 0, "th", 10)(17, CategoryListComponent_td_17_Template, 4, 2, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(18, CategoryListComponent_tr_18_Template, 1, 0, "tr", 13)(19, CategoryListComponent_tr_19_Template, 1, 0, "tr", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275template(20, CategoryListComponent_app_empty_state_20_Template, 1, 0, "app-empty-state", 15);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.canManage);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
        \u0275\u0275advance(4);
        \u0275\u0275property("dataSource", ctx.filtered);
        \u0275\u0275advance(7);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.filtered.length === 0);
      }
    }, dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgModel, MatIcon, MatButton, MatIconButton, MatFormField, MatLabel, MatSuffix, MatInput, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatTooltip, PageHeaderComponent, EmptyStateComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=category-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryListComponent, { className: "CategoryListComponent", filePath: "src/app/features/categories/category-list/category-list.component.ts", lineNumber: 16 });
})();

// src/app/features/categories/categories-routing.module.ts
var routes = [{ path: "", component: CategoryListComponent, title: "Categor\xEDas \xB7 VRIA" }];
var CategoriesRoutingModule = class _CategoriesRoutingModule {
  static {
    this.\u0275fac = function CategoriesRoutingModule_Factory(t) {
      return new (t || _CategoriesRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CategoriesRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/features/categories/categories.module.ts
var CategoriesModule = class _CategoriesModule {
  static {
    this.\u0275fac = function CategoriesModule_Factory(t) {
      return new (t || _CategoriesModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CategoriesModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, CategoriesRoutingModule] });
  }
};
export {
  CategoriesModule
};
//# sourceMappingURL=chunk-GCLGWTRM.js.map
