import {
  HttpClient,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-ODHWVYXN.js";

// src/app/core/services/category.service.ts
var CategoryService = class _CategoryService {
  constructor(http) {
    this.http = http;
    this.baseUrl = `${environment.apiUrl}/categories`;
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
  update(id, dto) {
    return this.http.put(`${this.baseUrl}/${id}`, dto);
  }
  delete(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  static {
    this.\u0275fac = function CategoryService_Factory(t) {
      return new (t || _CategoryService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CategoryService, factory: _CategoryService.\u0275fac, providedIn: "root" });
  }
};

export {
  CategoryService
};
//# sourceMappingURL=chunk-XMZNFBK4.js.map
