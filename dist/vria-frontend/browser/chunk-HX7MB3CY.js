import {
  HttpClient,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-ODHWVYXN.js";

// src/app/core/services/user.service.ts
var UserService = class _UserService {
  constructor(http) {
    this.http = http;
    this.baseUrl = `${environment.apiUrl}/users`;
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
    this.\u0275fac = function UserService_Factory(t) {
      return new (t || _UserService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
  }
};

export {
  UserService
};
//# sourceMappingURL=chunk-HX7MB3CY.js.map
