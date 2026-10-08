import {
  ConfirmDialogComponent,
  MatDialog,
  map,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UK26UTD3.js";

// src/app/shared/services/confirm-dialog.service.ts
var ConfirmDialogService = class _ConfirmDialogService {
  constructor(dialog) {
    this.dialog = dialog;
  }
  confirm(data) {
    const ref = this.dialog.open(ConfirmDialogComponent, {
      width: "420px",
      maxWidth: "95vw",
      data,
      autoFocus: false
    });
    return ref.afterClosed().pipe(map((result) => !!result));
  }
  static {
    this.\u0275fac = function ConfirmDialogService_Factory(t) {
      return new (t || _ConfirmDialogService)(\u0275\u0275inject(MatDialog));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConfirmDialogService, factory: _ConfirmDialogService.\u0275fac, providedIn: "root" });
  }
};

export {
  ConfirmDialogService
};
//# sourceMappingURL=chunk-EEHPKJDV.js.map
