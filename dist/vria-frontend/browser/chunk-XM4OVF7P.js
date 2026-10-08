import {
  HttpClient,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UK26UTD3.js";

// src/app/core/services/delivery.service.ts
var DeliveryService = class _DeliveryService {
  constructor(http) {
    this.http = http;
    this.baseUrl = `${environment.apiUrl}/deliveries`;
  }
  findAll() {
    return this.http.get(this.baseUrl);
  }
  findById(id) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  findByState(state) {
    return this.http.get(`${this.baseUrl}/state/${state}`);
  }
  create(dto) {
    return this.http.post(this.baseUrl, dto);
  }
  updateState(id, state) {
    return this.http.patch(`${this.baseUrl}/${id}/state`, null, {
      params: { state }
    });
  }
  delete(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  static {
    this.\u0275fac = function DeliveryService_Factory(t) {
      return new (t || _DeliveryService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DeliveryService, factory: _DeliveryService.\u0275fac, providedIn: "root" });
  }
};

export {
  DeliveryService
};
//# sourceMappingURL=chunk-XM4OVF7P.js.map
