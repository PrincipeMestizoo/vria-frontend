import {
  firstErrorMessage
} from "./chunk-5N3PECVO.js";
import {
  NotificationService
} from "./chunk-X56Y7PIT.js";
import {
  AuthService,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MatError,
  MatFormField,
  MatIcon,
  MatIconButton,
  MatInput,
  MatLabel,
  MatSuffix,
  NgControlStatus,
  NgControlStatusGroup,
  NgIf,
  Router,
  RouterModule,
  SharedModule,
  SubmitButtonComponent,
  Validators,
  finalize,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-ODHWVYXN.js";

// src/app/features/auth/login/login.component.ts
function LoginComponent_mat_error_12_Template(rf, ctx) {
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
function LoginComponent_mat_error_20_Template(rf, ctx) {
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
var LoginComponent = class _LoginComponent {
  constructor(fb, authService, notification, router) {
    this.fb = fb;
    this.authService = authService;
    this.notification = notification;
    this.router = router;
    this.loading = false;
    this.hidePassword = true;
    this.form = this.fb.nonNullable.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
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
    this.loading = true;
    this.authService.login(this.form.getRawValue()).pipe(finalize(() => this.loading = false)).subscribe({
      next: (response) => {
        this.notification.success(`Bienvenido, ${response.name}`);
        this.router.navigate(["/dashboard"]);
      }
    });
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 24, vars: 8, consts: [[1, "auth-card", "vria-card"], [1, "auth-card__subtitle"], [1, "auth-form", 3, "ngSubmit", "formGroup"], ["appearance", "outline"], ["matInput", "", "type", "email", "formControlName", "email", "autocomplete", "email", "placeholder", "nombre@vria.com"], ["matSuffix", ""], [4, "ngIf"], ["matInput", "", "formControlName", "password", "autocomplete", "current-password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["label", "Ingresar", "loadingLabel", "Ingresando\u2026", "icon", "login", 3, "loading", "disabled"], [1, "auth-card__footer"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2");
        \u0275\u0275text(2, "Inicia sesi\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 1);
        \u0275\u0275text(4, "Accede con tu correo corporativo VRIA.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "form", 2);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(6, "mat-form-field", 3)(7, "mat-label");
        \u0275\u0275text(8, "Correo electr\xF3nico");
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "input", 4);
        \u0275\u0275elementStart(10, "mat-icon", 5);
        \u0275\u0275text(11, "mail_outline");
        \u0275\u0275elementEnd();
        \u0275\u0275template(12, LoginComponent_mat_error_12_Template, 2, 1, "mat-error", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-form-field", 3)(14, "mat-label");
        \u0275\u0275text(15, "Contrase\xF1a");
        \u0275\u0275elementEnd();
        \u0275\u0275element(16, "input", 7);
        \u0275\u0275elementStart(17, "button", 8);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_17_listener() {
          return ctx.hidePassword = !ctx.hidePassword;
        });
        \u0275\u0275elementStart(18, "mat-icon");
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(20, LoginComponent_mat_error_20_Template, 2, 1, "mat-error", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275element(21, "app-submit-button", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "p", 10);
        \u0275\u0275text(23, " \xBFNo tienes acceso? Solic\xEDtalo a tu administrador de VRIA. ");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_5_0;
        \u0275\u0275advance(5);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", (tmp_1_0 = ctx.form.get("email")) == null ? null : tmp_1_0.invalid);
        \u0275\u0275advance(4);
        \u0275\u0275property("type", ctx.hidePassword ? "password" : "text");
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-label", "Mostrar contrase\xF1a");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.hidePassword ? "visibility_off" : "visibility");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_5_0 = ctx.form.get("password")) == null ? null : tmp_5_0.invalid);
        \u0275\u0275advance();
        \u0275\u0275property("loading", ctx.loading)("disabled", ctx.form.invalid);
      }
    }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatIcon, MatIconButton, MatFormField, MatLabel, MatError, MatSuffix, MatInput, SubmitButtonComponent], styles: ["\n\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 26rem;\n  padding: 2.5rem;\n  animation: _ngcontent-%COMP%_rise 420ms cubic-bezier(0.22, 1, 0.36, 1);\n}\n@media (max-width: 480px) {\n  .auth-card[_ngcontent-%COMP%] {\n    padding: 1.75rem 1.25rem;\n  }\n}\n.auth-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n  font-size: 1.6rem;\n  font-weight: 700;\n  background:\n    linear-gradient(\n      90deg,\n      var(--vria-blue),\n      var(--vria-purple));\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.auth-card__subtitle[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem;\n  color: var(--vria-text-secondary);\n}\n.auth-card__footer[_ngcontent-%COMP%] {\n  margin: 1.5rem 0 0;\n  text-align: center;\n  color: var(--vria-text-secondary);\n}\n.auth-card__footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--vria-purple);\n  font-weight: 600;\n  text-decoration: none;\n}\n.auth-card__footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.auth-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.auth-form[_ngcontent-%COMP%]   app-submit-button[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.auth-form[_ngcontent-%COMP%]   app-submit-button[_ngcontent-%COMP%]     .vria-btn {\n  width: 100%;\n}\n.auth-form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0 1rem;\n}\n@media (max-width: 480px) {\n  .auth-form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@keyframes _ngcontent-%COMP%_rise {\n  from {\n    opacity: 0;\n    transform: translateY(18px) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n/*# sourceMappingURL=login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/auth/login/login.component.ts", lineNumber: 14 });
})();

// src/app/features/auth/auth-routing.module.ts
var routes = [
  { path: "login", component: LoginComponent, title: "Iniciar sesi\xF3n \xB7 VRIA" },
  { path: "", pathMatch: "full", redirectTo: "login" }
];
var AuthRoutingModule = class _AuthRoutingModule {
  static {
    this.\u0275fac = function AuthRoutingModule_Factory(t) {
      return new (t || _AuthRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/features/auth/auth.module.ts
var AuthModule = class _AuthModule {
  static {
    this.\u0275fac = function AuthModule_Factory(t) {
      return new (t || _AuthModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, AuthRoutingModule] });
  }
};
export {
  AuthModule
};
//# sourceMappingURL=chunk-LBPSG7MJ.js.map
