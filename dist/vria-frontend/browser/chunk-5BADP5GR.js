import {
  HttpContext,
  HttpContextToken
} from "./chunk-UK26UTD3.js";

// src/app/core/interceptors/silent-request.ts
var SILENT_REQUEST = new HttpContextToken(() => false);
function silentContext() {
  return new HttpContext().set(SILENT_REQUEST, true);
}

export {
  SILENT_REQUEST,
  silentContext
};
//# sourceMappingURL=chunk-5BADP5GR.js.map
