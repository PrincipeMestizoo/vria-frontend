import {
  HttpClient,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-ODHWVYXN.js";

// src/app/core/services/transfer.service.ts
var TransferService = class _TransferService {
  constructor(http) {
    this.http = http;
    this.baseUrl = `${environment.apiUrl}/transfers`;
  }
  findAll() {
    return this.http.get(this.baseUrl);
  }
  findById(id) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  create(dto) {
    return this.http.post(this.baseUrl, dto);
  }
  delete(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  static {
    this.\u0275fac = function TransferService_Factory(t) {
      return new (t || _TransferService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TransferService, factory: _TransferService.\u0275fac, providedIn: "root" });
  }
};

export {
  TransferService
};
//# sourceMappingURL=chunk-7IKLVPJU.js.map
