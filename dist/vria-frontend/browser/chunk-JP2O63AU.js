import {
  silentContext
} from "./chunk-5BADP5GR.js";
import {
  HttpClient,
  __spreadProps,
  __spreadValues,
  environment,
  map,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UK26UTD3.js";

// src/app/core/services/product.service.ts
var NO_CATEGORY_LABEL = "Categoria no aceptada";
function withCategoryLabel(product) {
  return product.nameCategory ? product : __spreadProps(__spreadValues({}, product), { nameCategory: NO_CATEGORY_LABEL });
}
var ProductService = class _ProductService {
  constructor(http) {
    this.http = http;
    this.baseUrl = `${environment.apiUrl}/products`;
  }
  findAll(options = {}) {
    return this.http.get(this.baseUrl, {
      context: options.silent ? silentContext() : void 0
    }).pipe(map((products) => products.map(withCategoryLabel)));
  }
  findById(id) {
    return this.http.get(`${this.baseUrl}/${id}`).pipe(map(withCategoryLabel));
  }
  findByCategory(idCategory) {
    return this.http.get(`${this.baseUrl}/category/${idCategory}`).pipe(map((products) => products.map(withCategoryLabel)));
  }
  create(dto) {
    return this.http.post(this.baseUrl, dto).pipe(map(withCategoryLabel));
  }
  update(id, dto) {
    return this.http.put(`${this.baseUrl}/${id}`, dto).pipe(map(withCategoryLabel));
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
//# sourceMappingURL=chunk-JP2O63AU.js.map
