import {
  HttpContext,
  HttpContextToken
} from "./chunk-ODHWVYXN.js";

// src/app/core/interceptors/silent-request.ts
var SILENT_REQUEST = new HttpContextToken(() => false);
function silentContext() {
  return new HttpContext().set(SILENT_REQUEST, true);
}

export {
  SILENT_REQUEST,
  silentContext
};
//# sourceMappingURL=chunk-ILXFKMR3.js.map
