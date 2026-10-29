// src/app/shared/utils/stock-level.ts
var CRITICAL_MAX = 5;
var LOW_MAX = 15;
var STOCK_LEVELS = ["CRITICAL", "LOW", "OK"];
var STOCK_LEVEL_LABELS = {
  OK: "Disponible",
  LOW: "Stock bajo",
  CRITICAL: "Cr\xEDtico"
};
function getStockLevel(stock) {
  if (stock <= CRITICAL_MAX) {
    return "CRITICAL";
  }
  if (stock <= LOW_MAX) {
    return "LOW";
  }
  return "OK";
}

export {
  STOCK_LEVELS,
  STOCK_LEVEL_LABELS,
  getStockLevel
};
//# sourceMappingURL=chunk-6PUFV6PR.js.map
