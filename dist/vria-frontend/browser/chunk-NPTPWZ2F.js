import {
  TypeCategoryService
} from "./chunk-N2SXFVPT.js";
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

// src/app/features/type-categories/type-category-form/type-category-form.component.ts
function TypeCategoryFormComponent_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorFor("nameTypeCategory", "El nombre"), " ");
  }
}
var TypeCategoryFormComponent = class _TypeCategoryFormComponent {
  constructor(fb, typeCategoryService, notification, dialogRef, data) {
    this.fb = fb;
    this.typeCategoryService = typeCategoryService;
    this.notification = notification;
    this.dialogRef = dialogRef;
    this.data = data;
    this.loading = false;
    this.form = this.fb.nonNullable.group({
      nameTypeCategory: ["", [Validators.required]],
      description: [""]
    });
    this.isEdit = !!data.typeCategory;
    if (data.typeCategory) {
      this.form.patchValue({
        nameTypeCategory: data.typeCategory.nameTypeCategory,
        description: data.typeCategory.description ?? ""
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
    const payload = __spreadValues({
      idTypeCategory: this.data.typeCategory?.idTypeCategory ?? null
    }, this.form.getRawValue());
    this.loading = true;
    const request$ = this.isEdit ? this.typeCategoryService.update(payload.idTypeCategory, payload) : this.typeCategoryService.create(payload);
    request$.pipe(finalize(() => this.loading = false)).subscribe({
      next: () => {
        this.notification.success(this.isEdit ? "Tipo de categor\xEDa actualizado." : "Tipo de categor\xEDa creado.");
        this.dialogRef.close(true);
      }
    });
  }
  cancel() {
    this.dialogRef.close(false);
  }
  static {
    this.\u0275fac = function TypeCategoryFormComponent_Factory(t) {
      return new (t || _TypeCategoryFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TypeCategoryService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TypeCategoryFormComponent, selectors: [["app-type-category-form"]], decls: 17, vars: 6, consts: [["mat-dialog-title", ""], [3, "ngSubmit", "formGroup"], ["appearance", "outline"], ["matInput", "", "formControlName", "nameTypeCategory"], [4, "ngIf"], ["matInput", "", "rows", "3", "formControlName", "description"], ["align", "end"], ["mat-button", "", "type", "button", 3, "click"], [3, "label", "loading", "disabled"]], template: function TypeCategoryFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "form", 1);
        \u0275\u0275listener("ngSubmit", function TypeCategoryFormComponent_Template_form_ngSubmit_2_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(3, "mat-dialog-content")(4, "mat-form-field", 2)(5, "mat-label");
        \u0275\u0275text(6, "Nombre");
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "input", 3);
        \u0275\u0275template(8, TypeCategoryFormComponent_mat_error_8_Template, 2, 1, "mat-error", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "mat-form-field", 2)(10, "mat-label");
        \u0275\u0275text(11, "Descripci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275element(12, "textarea", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "mat-dialog-actions", 6)(14, "button", 7);
        \u0275\u0275listener("click", function TypeCategoryFormComponent_Template_button_click_14_listener() {
          return ctx.cancel();
        });
        \u0275\u0275text(15, "Cancelar");
        \u0275\u0275elementEnd();
        \u0275\u0275element(16, "app-submit-button", 8);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_2_0;
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.isEdit ? "Editar tipo de categor\xEDa" : "Nuevo tipo de categor\xEDa");
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", (tmp_2_0 = ctx.form.get("nameTypeCategory")) == null ? null : tmp_2_0.invalid);
        \u0275\u0275advance(8);
        \u0275\u0275property("label", ctx.isEdit ? "Guardar cambios" : "Crear")("loading", ctx.loading)("disabled", ctx.form.invalid);
      }
    }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatButton, MatFormField, MatLabel, MatError, MatInput, MatDialogTitle, MatDialogActions, MatDialogContent, SubmitButtonComponent], styles: ["\n\nmat-dialog-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  min-width: 22rem;\n}\n@media (max-width: 480px) {\n  mat-dialog-content[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=type-category-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TypeCategoryFormComponent, { className: "TypeCategoryFormComponent", filePath: "src/app/features/type-categories/type-category-form/type-category-form.component.ts", lineNumber: 15 });
})();

// src/app/features/type-categories/type-category-list/type-category-list.component.ts
function TypeCategoryListComponent_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function TypeCategoryListComponent_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openForm(null));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Nuevo tipo ");
    \u0275\u0275elementEnd();
  }
}
function TypeCategoryListComponent_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 18);
    \u0275\u0275text(1, "Nombre");
    \u0275\u0275elementEnd();
  }
}
function TypeCategoryListComponent_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r3.nameTypeCategory);
  }
}
function TypeCategoryListComponent_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 18);
    \u0275\u0275text(1, "Descripci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function TypeCategoryListComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.description || "\u2014");
  }
}
function TypeCategoryListComponent_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 18);
  }
}
function TypeCategoryListComponent_td_20_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function TypeCategoryListComponent_td_20_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const row_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openForm(row_r6));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
  }
}
function TypeCategoryListComponent_td_20_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function TypeCategoryListComponent_td_20_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const row_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.remove(row_r6));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function TypeCategoryListComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 19)(1, "div", 20);
    \u0275\u0275template(2, TypeCategoryListComponent_td_20_button_2_Template, 3, 0, "button", 21)(3, TypeCategoryListComponent_td_20_button_3_Template, 3, 0, "button", 22);
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
function TypeCategoryListComponent_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 25);
  }
}
function TypeCategoryListComponent_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 26);
  }
}
function TypeCategoryListComponent_app_empty_state_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 27);
  }
}
var TypeCategoryListComponent = class _TypeCategoryListComponent {
  constructor(typeCategoryService, notification, dialog, confirmDialog, authService) {
    this.typeCategoryService = typeCategoryService;
    this.notification = notification;
    this.dialog = dialog;
    this.confirmDialog = confirmDialog;
    this.authService = authService;
    this.displayedColumns = ["nameTypeCategory", "description", "actions"];
    this.loading = true;
    this.types = [];
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
    this.typeCategoryService.findAll().pipe(finalize(() => this.loading = false)).subscribe((data) => {
      this.types = data;
      this.applyFilter();
    });
  }
  applyFilter() {
    const term = this.searchTerm.trim().toLowerCase();
    this.filtered = term ? this.types.filter((t) => t.nameTypeCategory.toLowerCase().includes(term)) : this.types;
  }
  openForm(typeCategory) {
    const ref = this.dialog.open(TypeCategoryFormComponent, {
      width: "460px",
      maxWidth: "95vw",
      data: { typeCategory },
      autoFocus: false
    });
    ref.afterClosed().subscribe((changed) => {
      if (changed) {
        this.load();
      }
    });
  }
  remove(typeCategory) {
    this.confirmDialog.confirm({
      title: "Eliminar tipo de categor\xEDa",
      message: `\xBFSeguro que deseas eliminar "${typeCategory.nameTypeCategory}"?`,
      danger: true,
      confirmLabel: "Eliminar"
    }).subscribe((confirmed) => {
      if (!confirmed || typeCategory.idTypeCategory == null) {
        return;
      }
      this.typeCategoryService.delete(typeCategory.idTypeCategory).subscribe(() => {
        this.notification.success("Tipo de categor\xEDa eliminado.");
        this.load();
      });
    });
  }
  static {
    this.\u0275fac = function TypeCategoryListComponent_Factory(t) {
      return new (t || _TypeCategoryListComponent)(\u0275\u0275directiveInject(TypeCategoryService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(ConfirmDialogService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TypeCategoryListComponent, selectors: [["app-type-category-list"]], decls: 24, vars: 6, consts: [[1, "vria-page"], ["title", "Tipos de categor\xEDa", "subtitle", "Agrupa las categor\xEDas del cat\xE1logo de productos.", "icon", "sell"], ["mat-flat-button", "", "color", "primary", "class", "vria-btn", 3, "click", 4, "ngIf"], [1, "list-toolbar"], ["appearance", "outline", 1, "list-toolbar__search"], ["matInput", "", "placeholder", "Nombre del tipo", 3, "ngModelChange", "ngModel"], ["matSuffix", ""], [1, "vria-card", "data-table-card"], ["mat-table", "", 1, "data-table", 3, "dataSource"], ["matColumnDef", "nameTypeCategory"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "description"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "fade-row", 4, "matRowDef", "matRowDefColumns"], ["icon", "sell", "title", "No hay tipos de categor\xEDa", "message", "Crea el primer tipo de categor\xEDa para organizar tu cat\xE1logo.", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", 1, "vria-btn", 3, "click"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "cell-actions"], ["mat-icon-button", "", "class", "vria-btn-warning", "matTooltip", "Editar", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Eliminar", "color", "warn", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Editar", 1, "vria-btn-warning", 3, "click"], ["mat-icon-button", "", "matTooltip", "Eliminar", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 1, "fade-row"], ["icon", "sell", "title", "No hay tipos de categor\xEDa", "message", "Crea el primer tipo de categor\xEDa para organizar tu cat\xE1logo."]], template: function TypeCategoryListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "app-page-header", 1);
        \u0275\u0275template(2, TypeCategoryListComponent_button_2_Template, 4, 0, "button", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3)(4, "mat-form-field", 4)(5, "mat-label");
        \u0275\u0275text(6, "Buscar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "input", 5);
        \u0275\u0275twoWayListener("ngModelChange", function TypeCategoryListComponent_Template_input_ngModelChange_7_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function TypeCategoryListComponent_Template_input_ngModelChange_7_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "mat-icon", 6);
        \u0275\u0275text(9, "search");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 7)(11, "table", 8);
        \u0275\u0275elementContainerStart(12, 9);
        \u0275\u0275template(13, TypeCategoryListComponent_th_13_Template, 2, 0, "th", 10)(14, TypeCategoryListComponent_td_14_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(15, 12);
        \u0275\u0275template(16, TypeCategoryListComponent_th_16_Template, 2, 0, "th", 10)(17, TypeCategoryListComponent_td_17_Template, 2, 1, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(18, 13);
        \u0275\u0275template(19, TypeCategoryListComponent_th_19_Template, 1, 0, "th", 10)(20, TypeCategoryListComponent_td_20_Template, 4, 2, "td", 11);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(21, TypeCategoryListComponent_tr_21_Template, 1, 0, "tr", 14)(22, TypeCategoryListComponent_tr_22_Template, 1, 0, "tr", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275template(23, TypeCategoryListComponent_app_empty_state_23_Template, 1, 0, "app-empty-state", 16);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.canManage);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
        \u0275\u0275advance(4);
        \u0275\u0275property("dataSource", ctx.filtered);
        \u0275\u0275advance(10);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.filtered.length === 0);
      }
    }, dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgModel, MatIcon, MatButton, MatIconButton, MatFormField, MatLabel, MatSuffix, MatInput, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatTooltip, PageHeaderComponent, EmptyStateComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=type-category-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TypeCategoryListComponent, { className: "TypeCategoryListComponent", filePath: "src/app/features/type-categories/type-category-list/type-category-list.component.ts", lineNumber: 16 });
})();

// src/app/features/type-categories/type-categories-routing.module.ts
var routes = [
  { path: "", component: TypeCategoryListComponent, title: "Tipos de categor\xEDa \xB7 VRIA" }
];
var TypeCategoriesRoutingModule = class _TypeCategoriesRoutingModule {
  static {
    this.\u0275fac = function TypeCategoriesRoutingModule_Factory(t) {
      return new (t || _TypeCategoriesRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TypeCategoriesRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/features/type-categories/type-categories.module.ts
var TypeCategoriesModule = class _TypeCategoriesModule {
  static {
    this.\u0275fac = function TypeCategoriesModule_Factory(t) {
      return new (t || _TypeCategoriesModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TypeCategoriesModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, TypeCategoriesRoutingModule] });
  }
};
export {
  TypeCategoriesModule
};
//# sourceMappingURL=chunk-NPTPWZ2F.js.map
