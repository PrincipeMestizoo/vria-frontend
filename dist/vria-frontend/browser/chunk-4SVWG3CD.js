import {
  silentContext
} from "./chunk-ILXFKMR3.js";
import {
  HttpClient,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-ODHWVYXN.js";

// src/app/core/services/product.service.ts
var ProductService = class _ProductService {
  constructor(http) {
    this.http = http;
    this.baseUrl = `${environment.apiUrl}/products`;
  }
  findAll(options = {}) {
    return this.http.get(this.baseUrl, {
      context: options.silent ? silentContext() : void 0
    });
  }
  findById(id) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  findByCategory(idCategory) {
    return this.http.get(`${this.baseUrl}/category/${idCategory}`);
  }
  create(dto) {
    return this.http.post(this.baseUrl, dto);
  }
  update(id, dto) {
    return this.http.put(`${this.baseUrl}/${id}`, dto);
  }
  delete(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  static {
    this.\u0275fac = function ProductService_Factory(t) {
      return new (t || _ProductService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductService, factory: _ProductService.\u0275fac, providedIn: "root" });
  }
};

export {
  ProductService
};
//# sourceMappingURL=chunk-4SVWG3CD.js.map
