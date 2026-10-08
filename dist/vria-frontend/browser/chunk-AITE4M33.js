import {
  ProductService
} from "./chunk-JP2O63AU.js";
import "./chunk-5BADP5GR.js";
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
  PageHeaderComponent,
  RouterModule,
  SharedModule,
  SubmitButtonComponent,
  Validators,
  __spreadProps,
  __spreadValues,
  environment,
  finalize,
  map,
  of,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UK26UTD3.js";

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
//# sourceMappingURL=chunk-AITE4M33.js.map
