import {
  ActivityNotificationService
} from "./chunk-CDVYEXS6.js";
import {
  ProductService
} from "./chunk-OC3SX2LR.js";
import {
  CategoryService
} from "./chunk-UN4BQVNZ.js";
import {
  AuthService
} from "./chunk-3P32XUOT.js";
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
  CurrencyPipe,
  DefaultValueAccessor,
  EmptyStateComponent,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  HttpBackend,
  HttpClient,
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
  PRODUCT_CHANGE_LABELS,
  PageHeaderComponent,
  RecentChangesComponent,
  RelativeTimePipe,
  RouterModule,
  SharedModule,
  SubmitButtonComponent,
  Validators,
  __spreadProps,
  __spreadValues,
  catchError,
  environment,
  finalize,
  forkJoin,
  latestChangeByProduct,
  map,
  of,
  prioritizeChanged,
  switchMap,
  tap,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IREKQD7O.js";

// src/app/core/services/cloudinary.service.ts
var MAX_IMAGE_SIZE_BYTES = 5 * 1024 * 1024;
var ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];
var CloudinaryService = class _CloudinaryService {
  constructor(httpBackend) {
    this.uploadUrl = `https://api.cloudinary.com/v1_1/${environment.cloudinary.cloudName}/image/upload`;
    this.http = new HttpClient(httpBackend);
  }
  /** Sube la imagen con el public_id indicado y retorna su URL segura. */
  uploadImage(file, publicId) {
    const body = new FormData();
    body.append("file", file);
    body.append("upload_preset", environment.cloudinary.uploadPreset);
    body.append("folder", environment.cloudinary.folder);
    body.append("public_id", publicId);
    return this.http.post(this.uploadUrl, body).pipe(map((response) => response.secure_url));
  }
  static {
    this.\u0275fac = function CloudinaryService_Factory(t) {
      return new (t || _CloudinaryService)(\u0275\u0275inject(HttpBackend));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CloudinaryService, factory: _CloudinaryService.\u0275fac, providedIn: "root" });
  }
};

// src/app/features/products/product-form/product-form.component.ts
function ProductFormComponent_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorFor("nameProduct", "El nombre"));
  }
}
function ProductFormComponent_mat_option_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r3 = ctx.$implicit;
    \u0275\u0275property("value", category_r3.idCategory);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r3.nameCategory, " ");
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
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorFor("idCategory", "La categor\xEDa"));
  }
}
function ProductFormComponent_mat_error_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorFor("stock", "El stock"));
  }
}
function ProductFormComponent_mat_error_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorFor("price", "El precio"));
  }
}
function ProductFormComponent_img_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 29);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.previewUrl, \u0275\u0275sanitizeUrl);
  }
}
function ProductFormComponent_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "image");
    \u0275\u0275elementEnd();
  }
}
function ProductFormComponent_button_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function ProductFormComponent_button_48_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeImage());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Quitar ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.loading);
  }
}
function ProductFormComponent_mat_error_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.imageError);
  }
}
var ProductFormComponent = class _ProductFormComponent {
  constructor(fb, productService, categoryService, cloudinaryService, notification, dialogRef, data) {
    this.fb = fb;
    this.productService = productService;
    this.categoryService = categoryService;
    this.cloudinaryService = cloudinaryService;
    this.notification = notification;
    this.dialogRef = dialogRef;
    this.data = data;
    this.loading = false;
    this.loadingCategories = true;
    this.categories = [];
    this.acceptedImageTypes = ALLOWED_IMAGE_TYPES.join(",");
    this.selectedFile = null;
    this.previewUrl = null;
    this.imageError = null;
    this.objectUrl = null;
    this.createdProductId = null;
    this.uploadFailed = false;
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
      this.previewUrl = data.product.photo;
    }
  }
  ngOnInit() {
    this.categoryService.findAll().pipe(finalize(() => this.loadingCategories = false)).subscribe((categories) => this.categories = categories);
  }
  ngOnDestroy() {
    this.revokeObjectUrl();
  }
  errorFor(controlName, label) {
    return firstErrorMessage(this.form.get(controlName), label);
  }
  onFileSelected(event) {
    const input = event.target;
    const file = input.files?.[0];
    input.value = "";
    if (!file) {
      return;
    }
    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      this.imageError = "Formato no permitido. Usa JPG, PNG o WEBP.";
      return;
    }
    if (file.size > MAX_IMAGE_SIZE_BYTES) {
      this.imageError = "La imagen supera el tama\xF1o m\xE1ximo de 5 MB.";
      return;
    }
    this.imageError = null;
    this.selectedFile = file;
    this.revokeObjectUrl();
    this.objectUrl = URL.createObjectURL(file);
    this.previewUrl = this.objectUrl;
  }
  removeImage() {
    this.selectedFile = null;
    this.imageError = null;
    this.revokeObjectUrl();
    this.previewUrl = null;
    this.form.controls.photo.setValue("");
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
    const request$ = this.isEdit ? this.saveEdit(payload) : this.saveNew(payload);
    request$.pipe(finalize(() => this.loading = false)).subscribe({
      next: () => {
        this.notification.success(this.isEdit ? "Producto actualizado." : "Producto creado.");
        this.dialogRef.close(true);
      },
      error: () => {
        if (this.uploadFailed) {
          this.notification.error(this.createdProductId !== null ? "Producto creado, pero no se pudo subir la imagen." : "No se pudo subir la imagen.");
        }
        if (this.createdProductId !== null) {
          this.dialogRef.close(true);
        }
      }
    });
  }
  cancel() {
    this.dialogRef.close(false);
  }
  // Edicion: el id ya existe, se sube la imagen primero y se envia el formulario con la URL
  saveEdit(payload) {
    const id = this.data.product.idProduct;
    return this.uploadSelected(id).pipe(switchMap((url) => this.productService.update(id, __spreadProps(__spreadValues({}, payload), { photo: url ?? payload.photo }))));
  }
  // Creacion: el id lo asigna el backend, asi que se crea, se sube "product{id}" y se actualiza la foto
  saveNew(payload) {
    this.createdProductId = null;
    return this.productService.create(payload).pipe(switchMap((created) => {
      this.createdProductId = created.idProduct;
      return this.uploadSelected(created.idProduct).pipe(switchMap((url) => url ? this.productService.update(created.idProduct, __spreadProps(__spreadValues({}, payload), { photo: url })) : of(created)));
    }));
  }
  uploadSelected(idProduct) {
    this.uploadFailed = false;
    if (!this.selectedFile) {
      return of(null);
    }
    const publicId = this.isEdit ? `product${idProduct}_${Date.now()}` : `product${idProduct}`;
    return this.cloudinaryService.uploadImage(this.selectedFile, publicId).pipe(tap({ error: () => this.uploadFailed = true }));
  }
  revokeObjectUrl() {
    if (this.objectUrl) {
      URL.revokeObjectURL(this.objectUrl);
      this.objectUrl = null;
    }
  }
  static {
    this.\u0275fac = function ProductFormComponent_Factory(t) {
      return new (t || _ProductFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(CategoryService), \u0275\u0275directiveInject(CloudinaryService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductFormComponent, selectors: [["app-product-form"]], decls: 60, vars: 20, consts: [["noImage", ""], ["fileInput", ""], ["mat-dialog-title", ""], [3, "ngSubmit", "formGroup"], ["appearance", "outline"], ["matInput", "", "formControlName", "nameProduct"], [4, "ngIf"], ["formControlName", "idCategory"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-row"], ["matInput", "", "type", "number", "min", "0", "formControlName", "stock"], ["matTextPrefix", ""], ["matInput", "", "type", "number", "min", "0", "step", "0.01", "formControlName", "price"], ["matInput", "", "formControlName", "reference"], [1, "image-field"], [1, "image-field__label"], [1, "image-field__body"], [1, "image-field__preview"], ["alt", "Vista previa del producto", 3, "src", 4, "ngIf", "ngIfElse"], [1, "image-field__actions"], ["type", "file", "hidden", "", 3, "change", "accept"], ["mat-stroked-button", "", "type", "button", 3, "click", "disabled"], ["mat-button", "", "type", "button", "color", "warn", 3, "disabled", "click", 4, "ngIf"], [1, "image-field__hint"], ["matInput", "", "rows", "3", "formControlName", "description"], ["align", "end"], ["mat-button", "", "type", "button", 3, "click"], [3, "label", "loading", "disabled"], [3, "value"], ["alt", "Vista previa del producto", 3, "src"], ["mat-button", "", "type", "button", "color", "warn", 3, "click", "disabled"]], template: function ProductFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "h2", 2);
        \u0275\u0275text(1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "form", 3);
        \u0275\u0275listener("ngSubmit", function ProductFormComponent_Template_form_ngSubmit_2_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.submit());
        });
        \u0275\u0275elementStart(3, "mat-dialog-content")(4, "mat-form-field", 4)(5, "mat-label");
        \u0275\u0275text(6, "Nombre del producto");
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "input", 5);
        \u0275\u0275template(8, ProductFormComponent_mat_error_8_Template, 2, 1, "mat-error", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "mat-form-field", 4)(10, "mat-label");
        \u0275\u0275text(11, "Categor\xEDa");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "mat-select", 7);
        \u0275\u0275template(13, ProductFormComponent_mat_option_13_Template, 2, 2, "mat-option", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, ProductFormComponent_mat_hint_14_Template, 2, 0, "mat-hint", 6)(15, ProductFormComponent_mat_error_15_Template, 2, 1, "mat-error", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 9)(17, "mat-form-field", 4)(18, "mat-label");
        \u0275\u0275text(19, "Stock");
        \u0275\u0275elementEnd();
        \u0275\u0275element(20, "input", 10);
        \u0275\u0275template(21, ProductFormComponent_mat_error_21_Template, 2, 1, "mat-error", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "mat-form-field", 4)(23, "mat-label");
        \u0275\u0275text(24, "Precio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "span", 11);
        \u0275\u0275text(26, "$\xA0");
        \u0275\u0275elementEnd();
        \u0275\u0275element(27, "input", 12);
        \u0275\u0275template(28, ProductFormComponent_mat_error_28_Template, 2, 1, "mat-error", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "mat-form-field", 4)(30, "mat-label");
        \u0275\u0275text(31, "Referencia");
        \u0275\u0275elementEnd();
        \u0275\u0275element(32, "input", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 14)(34, "span", 15);
        \u0275\u0275text(35, "Imagen del producto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 16)(37, "div", 17);
        \u0275\u0275template(38, ProductFormComponent_img_38_Template, 1, 1, "img", 18)(39, ProductFormComponent_ng_template_39_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 19)(42, "input", 20, 1);
        \u0275\u0275listener("change", function ProductFormComponent_Template_input_change_42_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onFileSelected($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "button", 21);
        \u0275\u0275listener("click", function ProductFormComponent_Template_button_click_44_listener() {
          \u0275\u0275restoreView(_r1);
          const fileInput_r4 = \u0275\u0275reference(43);
          return \u0275\u0275resetView(fileInput_r4.click());
        });
        \u0275\u0275elementStart(45, "mat-icon");
        \u0275\u0275text(46, "upload");
        \u0275\u0275elementEnd();
        \u0275\u0275text(47);
        \u0275\u0275elementEnd();
        \u0275\u0275template(48, ProductFormComponent_button_48_Template, 4, 1, "button", 22);
        \u0275\u0275elementStart(49, "span", 23);
        \u0275\u0275text(50, "JPG, PNG o WEBP. M\xE1x. 5 MB.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(51, ProductFormComponent_mat_error_51_Template, 2, 1, "mat-error", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "mat-form-field", 4)(53, "mat-label");
        \u0275\u0275text(54, "Descripci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275element(55, "textarea", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "mat-dialog-actions", 25)(57, "button", 26);
        \u0275\u0275listener("click", function ProductFormComponent_Template_button_click_57_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.cancel());
        });
        \u0275\u0275text(58, "Cancelar");
        \u0275\u0275elementEnd();
        \u0275\u0275element(59, "app-submit-button", 27);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_4_0;
        let tmp_7_0;
        let tmp_8_0;
        let tmp_9_0;
        const noImage_r6 = \u0275\u0275reference(40);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.isEdit ? "Editar producto" : "Nuevo producto");
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", (tmp_4_0 = ctx.form.get("nameProduct")) == null ? null : tmp_4_0.invalid);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.categories);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loadingCategories && ctx.categories.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_7_0 = ctx.form.get("idCategory")) == null ? null : tmp_7_0.invalid);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", (tmp_8_0 = ctx.form.get("stock")) == null ? null : tmp_8_0.invalid);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", (tmp_9_0 = ctx.form.get("price")) == null ? null : tmp_9_0.invalid);
        \u0275\u0275advance(9);
        \u0275\u0275classProp("image-field__preview--empty", !ctx.previewUrl);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.previewUrl)("ngIfElse", noImage_r6);
        \u0275\u0275advance(4);
        \u0275\u0275property("accept", ctx.acceptedImageTypes);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.previewUrl ? "Cambiar imagen" : "Subir imagen", " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.previewUrl);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.imageError);
        \u0275\u0275advance(8);
        \u0275\u0275property("label", ctx.isEdit ? "Guardar cambios" : "Crear")("loading", ctx.loading)("disabled", ctx.form.invalid);
      }
    }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, MatIcon, MatButton, MatFormField, MatLabel, MatHint, MatError, MatPrefix, MatInput, MatSelect, MatOption, MatDialogTitle, MatDialogActions, MatDialogContent, SubmitButtonComponent], styles: ["\n\nmat-dialog-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  min-width: 24rem;\n}\n@media (max-width: 480px) {\n  mat-dialog-content[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0 1rem;\n}\n@media (max-width: 480px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.image-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin-bottom: 1.25rem;\n}\n.image-field__label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  opacity: 0.8;\n}\n.image-field__body[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n@media (max-width: 480px) {\n  .image-field__body[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n.image-field__preview[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 6rem;\n  height: 6rem;\n  border-radius: 0.5rem;\n  overflow: hidden;\n  border: 1px solid rgba(127, 127, 127, 0.35);\n}\n.image-field__preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.image-field__preview--empty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-style: dashed;\n  opacity: 0.6;\n}\n.image-field__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5rem;\n}\n.image-field__hint[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  font-size: 0.75rem;\n  opacity: 0.7;\n}\n/*# sourceMappingURL=product-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductFormComponent, { className: "ProductFormComponent", filePath: "src/app/features/products/product-form/product-form.component.ts", lineNumber: 21 });
})();

// src/app/features/products/product-list/product-list.component.ts
function ProductListComponent_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
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
function ProductListComponent_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 21);
    \u0275\u0275text(1, "Producto");
    \u0275\u0275elementEnd();
  }
}
function ProductListComponent_td_15_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Ref. ", row_r3.reference, "");
  }
}
function ProductListComponent_td_15_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28)(1, "mat-icon");
    \u0275\u0275text(2, "auto_awesome");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "relativeTime");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const change_r4 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matTooltip", change_r4.message + " \u2014 " + change_r4.actorName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.changeLabels[change_r4.action], " \xB7 ", \u0275\u0275pipeBind1(4, 3, change_r4.createdAt), " ");
  }
}
function ProductListComponent_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 22)(1, "div", 23)(2, "span", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ProductListComponent_td_15_span_4_Template, 2, 1, "span", 25)(5, ProductListComponent_td_15_span_5_Template, 5, 5, "span", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r3.nameProduct);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r3.reference);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.changesById.get(row_r3.idProduct));
  }
}
function ProductListComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 21);
    \u0275\u0275text(1, "Categor\xEDa");
    \u0275\u0275elementEnd();
  }
}
function ProductListComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 22)(1, "mat-chip", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.nameCategory);
  }
}
function ProductListComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 21);
    \u0275\u0275text(1, "Stock");
    \u0275\u0275elementEnd();
  }
}
function ProductListComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 22)(1, "span", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("stock-badge--low", row_r6.stock <= 5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.stock);
  }
}
function ProductListComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 21);
    \u0275\u0275text(1, "Precio");
    \u0275\u0275elementEnd();
  }
}
function ProductListComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(2, 1, row_r7.price, "COP", "symbol-narrow", "1.0-0"));
  }
}
function ProductListComponent_th_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 21);
  }
}
function ProductListComponent_td_27_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function ProductListComponent_td_27_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const row_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openForm(row_r9));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
  }
}
function ProductListComponent_td_27_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function ProductListComponent_td_27_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const row_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.remove(row_r9));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function ProductListComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 22)(1, "div", 31);
    \u0275\u0275template(2, ProductListComponent_td_27_button_2_Template, 3, 0, "button", 32)(3, ProductListComponent_td_27_button_3_Template, 3, 0, "button", 33);
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
function ProductListComponent_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 36);
  }
}
function ProductListComponent_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 37);
  }
  if (rf & 2) {
    const row_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("row--changed", ctx_r1.changesById.has(row_r11.idProduct))("row--highlight", ctx_r1.highlightedId === row_r11.idProduct);
    \u0275\u0275property("id", "product-row-" + row_r11.idProduct);
  }
}
function ProductListComponent_app_empty_state_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 38);
  }
}
var HIGHLIGHT_MS = 1800;
var ProductListComponent = class _ProductListComponent {
  constructor(productService, notification, dialog, confirmDialog, activityService, authService) {
    this.productService = productService;
    this.notification = notification;
    this.dialog = dialog;
    this.confirmDialog = confirmDialog;
    this.activityService = activityService;
    this.authService = authService;
    this.displayedColumns = ["nameProduct", "nameCategory", "stock", "price", "actions"];
    this.loading = true;
    this.products = [];
    this.filtered = [];
    this.searchTerm = "";
    this.changeLabels = PRODUCT_CHANGE_LABELS;
    this.recentChanges = [];
    this.changesById = /* @__PURE__ */ new Map();
    this.highlightedId = null;
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
    forkJoin({
      products: this.productService.findAll(),
      changes: this.activityService.recentProductChanges().pipe(catchError(() => of([])))
    }).pipe(finalize(() => this.loading = false)).subscribe(({ products, changes }) => {
      this.recentChanges = changes;
      this.changesById = latestChangeByProduct(changes);
      this.products = prioritizeChanged(products, (p) => p.idProduct, this.changesById);
      this.applyFilter();
    });
  }
  applyFilter() {
    const term = this.searchTerm.trim().toLowerCase();
    this.filtered = term ? this.products.filter((p) => p.nameProduct.toLowerCase().includes(term) || p.nameCategory.toLowerCase().includes(term) || (p.reference || "").toLowerCase().includes(term)) : this.products;
  }
  /** Ubica y resalta la fila del producto elegido en la ventana de cambios. */
  focusProduct(change) {
    if (change.entityId == null) {
      return;
    }
    this.searchTerm = "";
    this.applyFilter();
    this.highlightedId = change.entityId;
    setTimeout(() => document.getElementById(`product-row-${change.entityId}`)?.scrollIntoView({ behavior: "smooth", block: "center" }));
    setTimeout(() => this.highlightedId = null, HIGHLIGHT_MS);
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
      return new (t || _ProductListComponent)(\u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(ConfirmDialogService), \u0275\u0275directiveInject(ActivityNotificationService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductListComponent, selectors: [["app-product-list"]], decls: 31, vars: 7, consts: [[1, "vria-page"], ["title", "Productos", "subtitle", "Cat\xE1logo digital de productos disponibles.", "icon", "inventory_2"], ["mat-flat-button", "", "color", "primary", "class", "vria-btn", 3, "click", 4, "ngIf"], ["title", "Novedades en productos", 3, "selectChange", "changes"], [1, "list-toolbar"], ["appearance", "outline", 1, "list-toolbar__search"], ["matInput", "", "placeholder", "Nombre, categor\xEDa o referencia", 3, "ngModelChange", "ngModel"], ["matSuffix", ""], [1, "vria-card", "data-table-card"], ["mat-table", "", 1, "data-table", 3, "dataSource"], ["matColumnDef", "nameProduct"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nameCategory"], ["matColumnDef", "stock"], ["matColumnDef", "price"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "fade-row", 3, "id", "row--changed", "row--highlight", 4, "matRowDef", "matRowDefColumns"], ["icon", "inventory_2", "title", "No hay productos", "message", "Agrega tu primer producto para comenzar a vender.", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", 1, "vria-btn", 3, "click"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "product-cell"], [1, "product-cell__name"], ["class", "product-cell__ref", 4, "ngIf"], ["class", "change-tag", 3, "matTooltip", 4, "ngIf"], [1, "product-cell__ref"], [1, "change-tag", 3, "matTooltip"], [1, "state-chip"], [1, "stock-badge"], [1, "cell-actions"], ["mat-icon-button", "", "class", "vria-btn-warning", "matTooltip", "Editar", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Eliminar", "color", "warn", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Editar", 1, "vria-btn-warning", 3, "click"], ["mat-icon-button", "", "matTooltip", "Eliminar", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 1, "fade-row", 3, "id"], ["icon", "inventory_2", "title", "No hay productos", "message", "Agrega tu primer producto para comenzar a vender."]], template: function ProductListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "app-page-header", 1);
        \u0275\u0275template(2, ProductListComponent_button_2_Template, 4, 0, "button", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "app-recent-changes", 3);
        \u0275\u0275listener("selectChange", function ProductListComponent_Template_app_recent_changes_selectChange_3_listener($event) {
          return ctx.focusProduct($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 4)(5, "mat-form-field", 5)(6, "mat-label");
        \u0275\u0275text(7, "Buscar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Template_input_ngModelChange_8_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function ProductListComponent_Template_input_ngModelChange_8_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "mat-icon", 7);
        \u0275\u0275text(10, "search");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 8)(12, "table", 9);
        \u0275\u0275elementContainerStart(13, 10);
        \u0275\u0275template(14, ProductListComponent_th_14_Template, 2, 0, "th", 11)(15, ProductListComponent_td_15_Template, 6, 3, "td", 12);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(16, 13);
        \u0275\u0275template(17, ProductListComponent_th_17_Template, 2, 0, "th", 11)(18, ProductListComponent_td_18_Template, 3, 1, "td", 12);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(19, 14);
        \u0275\u0275template(20, ProductListComponent_th_20_Template, 2, 0, "th", 11)(21, ProductListComponent_td_21_Template, 3, 3, "td", 12);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(22, 15);
        \u0275\u0275template(23, ProductListComponent_th_23_Template, 2, 0, "th", 11)(24, ProductListComponent_td_24_Template, 3, 6, "td", 12);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(25, 16);
        \u0275\u0275template(26, ProductListComponent_th_26_Template, 1, 0, "th", 11)(27, ProductListComponent_td_27_Template, 4, 2, "td", 12);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(28, ProductListComponent_tr_28_Template, 1, 0, "tr", 17)(29, ProductListComponent_tr_29_Template, 1, 5, "tr", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275template(30, ProductListComponent_app_empty_state_30_Template, 1, 0, "app-empty-state", 19);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.canManage);
        \u0275\u0275advance();
        \u0275\u0275property("changes", ctx.recentChanges);
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
    }, dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgModel, MatIcon, MatButton, MatIconButton, MatFormField, MatLabel, MatSuffix, MatInput, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatChip, MatTooltip, PageHeaderComponent, EmptyStateComponent, RecentChangesComponent, CurrencyPipe, RelativeTimePipe], styles: ["\n\n.product-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.product-cell__name[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.product-cell__ref[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--vria-text-secondary);\n}\n.stock-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 2.2rem;\n  padding: 0.2rem 0.6rem;\n  border-radius: 999px;\n  font-weight: 700;\n  background: rgba(0, 163, 224, 0.1);\n  color: var(--vria-blue-dark);\n  box-shadow: var(--vria-shadow-sm);\n}\n.stock-badge--low[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.12);\n  color: var(--vria-danger-dark);\n}\n.change-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  align-self: flex-start;\n  gap: 0.25rem;\n  margin-top: 0.3rem;\n  padding: 0.12rem 0.55rem 0.12rem 0.4rem;\n  border-radius: 999px;\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: var(--vria-purple-dark);\n  background: color-mix(in srgb, var(--vria-purple) 12%, transparent);\n}\n.change-tag[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 13px;\n  width: 13px;\n  height: 13px;\n}\n.row--changed[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--vria-purple) 4%, transparent);\n}\n.row--changed[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  box-shadow: inset 3px 0 0 var(--vria-purple);\n}\n.row--highlight[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_rowPulse 1.6s ease-out;\n}\n@keyframes _ngcontent-%COMP%_rowPulse {\n  30% {\n    background: color-mix(in srgb, var(--vria-accent) 16%, transparent);\n  }\n}\n/*# sourceMappingURL=product-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductListComponent, { className: "ProductListComponent", filePath: "src/app/features/products/product-list/product-list.component.ts", lineNumber: 24 });
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
//# sourceMappingURL=chunk-75ZZORRW.js.map
