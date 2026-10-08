import {
  MatSnackBar,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UK26UTD3.js";

// src/app/core/services/notification.service.ts
var NotificationService = class _NotificationService {
  constructor(snackBar) {
    this.snackBar = snackBar;
  }
  success(message) {
    this.snackBar.open(message, "Cerrar", {
      duration: 3500,
      panelClass: ["vria-snack", "vria-snack--success"],
      horizontalPosition: "end",
      verticalPosition: "top"
    });
  }
  error(message) {
    this.snackBar.open(message, "Cerrar", {
      duration: 5e3,
      panelClass: ["vria-snack", "vria-snack--error"],
      horizontalPosition: "end",
      verticalPosition: "top"
    });
  }
  info(message) {
    this.snackBar.open(message, "Cerrar", {
      duration: 3e3,
      panelClass: ["vria-snack", "vria-snack--info"],
      horizontalPosition: "end",
      verticalPosition: "top"
    });
  }
  static {
    this.\u0275fac = function NotificationService_Factory(t) {
      return new (t || _NotificationService)(\u0275\u0275inject(MatSnackBar));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
  }
};

export {
  NotificationService
};
//# sourceMappingURL=chunk-YGVAY7K4.js.map
