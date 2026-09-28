import {
  UserService
} from "./chunk-HX7MB3CY.js";
import {
  ProductService
} from "./chunk-4SVWG3CD.js";
import "./chunk-ILXFKMR3.js";
import {
  CategoryService
} from "./chunk-XMZNFBK4.js";
import {
  TypeCategoryService
} from "./chunk-N2SXFVPT.js";
import {
  DeliveryService
} from "./chunk-QQTCFEFZ.js";
import {
  TransferService
} from "./chunk-7IKLVPJU.js";
import {
  AuthService,
  DatePipe,
  DeliveryStateLabelPipe,
  EmptyStateComponent,
  MatAnchor,
  MatButton,
  MatChip,
  MatIcon,
  MatIconButton,
  MatTooltip,
  NgClass,
  NgForOf,
  NgIf,
  PageHeaderComponent,
  RouterLink,
  RouterModule,
  SharedModule,
  catchError,
  forkJoin,
  interval,
  listStagger,
  map,
  of,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ODHWVYXN.js";

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

// src/app/features/dashboard/dashboard.component.ts
var _c0 = () => [1, 2, 3, 4];
function DashboardComponent_div_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 18)(1, "div", 19)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 20)(5, "span", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 22);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const stat_r2 = ctx.$implicit;
    \u0275\u0275classProp("stat-card--purple", stat_r2.accent === "purple")("stat-card--green", stat_r2.accent === "green")("stat-card--amber", stat_r2.accent === "amber");
    \u0275\u0275property("routerLink", stat_r2.path);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stat_r2.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stat_r2.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r2.label);
  }
}
function DashboardComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, DashboardComponent_div_2_a_1_Template, 9, 10, "a", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("@listStagger", ctx_r2.stats.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.stats);
  }
}
function DashboardComponent_ng_template_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 24);
  }
}
function DashboardComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, DashboardComponent_ng_template_3_div_1_Template, 1, 0, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function DashboardComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Actualizado ", \u0275\u0275pipeBind2(2, 1, ctx_r2.stockUpdatedAt, "shortTime"), " ");
  }
}
function DashboardComponent_a_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 26);
    \u0275\u0275text(1, "Ver inventario");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_16_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function DashboardComponent_div_16_button_2_Template_button_click_0_listener() {
      const level_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleStockFilter(level_r5));
    });
    \u0275\u0275element(1, "span", 37);
    \u0275\u0275elementStart(2, "span", 38)(3, "span", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 40);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("signal__lamp--on", ctx_r2.stockSummary[level_r5] > 0)("signal__lamp--selected", ctx_r2.stockFilter === level_r5)("signal__lamp--dimmed", ctx_r2.stockFilter && ctx_r2.stockFilter !== level_r5);
    \u0275\u0275property("ngClass", "signal__lamp--" + level_r5.toLowerCase());
    \u0275\u0275attribute("aria-pressed", ctx_r2.stockFilter === level_r5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.stockSummary[level_r5]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.stockLevelLabels[level_r5]);
  }
}
function DashboardComponent_div_16_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 42);
    \u0275\u0275listener("click", function DashboardComponent_div_16_div_4_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleStockFilter(ctx_r2.stockFilter));
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Quitar filtro ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Mostrando: ", ctx_r2.stockLevelLabels[ctx_r2.stockFilter], "");
  }
}
function DashboardComponent_div_16_app_empty_state_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 43);
  }
}
function DashboardComponent_div_16_app_empty_state_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 44);
  }
}
function DashboardComponent_div_16_app_empty_state_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 45);
  }
}
function DashboardComponent_div_16_ul_8_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 48);
    \u0275\u0275element(1, "span", 49);
    \u0275\u0275elementStart(2, "span", 50)(3, "span", 51);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 52);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 53)(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", "stock-item--" + item_r7.level.toLowerCase());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.category);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r7.stock);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.stock === 0 ? "Agotado" : ctx_r2.stockLevelLabels[item_r7.level]);
  }
}
function DashboardComponent_div_16_ul_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 46);
    \u0275\u0275template(1, DashboardComponent_div_16_ul_8_li_1_Template, 12, 5, "li", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.visibleStockItems)("ngForTrackBy", ctx_r2.trackByStockItem);
  }
}
function DashboardComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275template(2, DashboardComponent_div_16_button_2_Template, 7, 10, "button", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 30);
    \u0275\u0275template(4, DashboardComponent_div_16_div_4_Template, 7, 1, "div", 31)(5, DashboardComponent_div_16_app_empty_state_5_Template, 1, 0, "app-empty-state", 32)(6, DashboardComponent_div_16_app_empty_state_6_Template, 1, 0, "app-empty-state", 33)(7, DashboardComponent_div_16_app_empty_state_7_Template, 1, 0, "app-empty-state", 34)(8, DashboardComponent_div_16_ul_8_Template, 2, 2, "ul", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.stockLevels);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.stockFilter);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.stockError && !ctx_r2.stockItems.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.stockError && !ctx_r2.stockItems.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.stockItems.length && !ctx_r2.visibleStockItems.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.visibleStockItems.length);
  }
}
function DashboardComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 54);
  }
}
function DashboardComponent_div_19_a_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 58)(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const action_r8 = ctx.$implicit;
    \u0275\u0275classMap(action_r8.colorClass);
    \u0275\u0275property("routerLink", action_r8.path);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(action_r8.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", action_r8.label, " ");
  }
}
function DashboardComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 6)(2, "h2");
    \u0275\u0275text(3, "Accesos r\xE1pidos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 56);
    \u0275\u0275template(5, DashboardComponent_div_19_a_5_Template, 4, 5, "a", 57);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.quickActions);
  }
}
function DashboardComponent_div_20_app_empty_state_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 63);
  }
}
function DashboardComponent_div_20_table_7_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "mat-chip", 66);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "deliveryStateLabel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const delivery_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(delivery_r9.nameClient);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(delivery_r9.nameDelivery);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("chip--ready", delivery_r9.state === "READY");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 5, delivery_r9.state), " ");
  }
}
function DashboardComponent_div_20_table_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 64)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Repartidor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Estado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "tbody");
    \u0275\u0275template(10, DashboardComponent_div_20_table_7_tr_10_Template, 9, 7, "tr", 65);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r2.pendingDeliveries);
  }
}
function DashboardComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 6)(2, "h2");
    \u0275\u0275text(3, "Entregas pendientes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 60);
    \u0275\u0275text(5, "Ver todas");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, DashboardComponent_div_20_app_empty_state_6_Template, 1, 0, "app-empty-state", 61)(7, DashboardComponent_div_20_table_7_Template, 11, 1, "table", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !ctx_r2.loadingStats && ctx_r2.pendingDeliveries.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.pendingDeliveries.length);
  }
}
var STOCK_REFRESH_MS = 6e4;
var QUICK_ACTIONS = [
  {
    label: "Nueva entrega",
    icon: "local_shipping",
    path: "/deliveries",
    colorClass: "vria-btn-info",
    roles: ["ADMIN", "COMMERCIAL_ADVISOR"]
  },
  {
    label: "Nuevo producto",
    icon: "inventory_2",
    path: "/products",
    colorClass: "vria-btn-success",
    roles: ["ADMIN", "WAREHOUSE_KEEPER"]
  },
  {
    label: "Nueva transferencia",
    icon: "receipt_long",
    path: "/transfers",
    colorClass: "vria-btn-warning",
    roles: ["ADMIN", "COMMERCIAL_ADVISOR"]
  },
  {
    label: "Gestionar usuarios",
    icon: "manage_accounts",
    path: "/users",
    colorClass: "vria-btn-danger",
    roles: ["ADMIN"]
  }
];
var DashboardComponent = class _DashboardComponent {
  constructor(authService, productService, categoryService, typeCategoryService, deliveryService, transferService, userService) {
    this.authService = authService;
    this.productService = productService;
    this.categoryService = categoryService;
    this.typeCategoryService = typeCategoryService;
    this.deliveryService = deliveryService;
    this.transferService = transferService;
    this.userService = userService;
    this.currentUser = null;
    this.loadingStats = true;
    this.stats = [];
    this.quickActions = [];
    this.pendingDeliveries = [];
    this.canSeeDeliveries = false;
    this.canSeeInventory = false;
    this.stockLevels = STOCK_LEVELS;
    this.stockLevelLabels = STOCK_LEVEL_LABELS;
    this.stockItems = [];
    this.visibleStockItems = [];
    this.stockSummary = { OK: 0, LOW: 0, CRITICAL: 0 };
    this.stockFilter = null;
    this.stockError = false;
    this.refreshingStock = false;
    this.stockUpdatedAt = null;
  }
  ngOnInit() {
    this.currentUser = this.authService.currentUser;
    const canSeeInventory = this.authService.hasAnyRole(["ADMIN", "WAREHOUSE_KEEPER"]);
    const canSeeDeliveries = this.authService.hasAnyRole(["ADMIN", "COMMERCIAL_ADVISOR"]);
    const canSeeTransfers = this.authService.hasAnyRole(["ADMIN", "COMMERCIAL_ADVISOR"]);
    const canSeeUsers = this.authService.hasAnyRole(["ADMIN"]);
    this.canSeeDeliveries = canSeeDeliveries;
    this.canSeeInventory = canSeeInventory;
    this.quickActions = QUICK_ACTIONS.filter((action) => this.authService.hasAnyRole(action.roles));
    forkJoin({
      products: this.productService.findAll().pipe(catchError(() => {
        this.stockError = true;
        return of([]);
      })),
      categories: canSeeInventory ? this.categoryService.findAll().pipe(catchError(() => of([]))) : of([]),
      typeCategories: canSeeInventory ? this.typeCategoryService.findAll().pipe(catchError(() => of([]))) : of([]),
      deliveries: canSeeDeliveries ? this.deliveryService.findAll().pipe(catchError(() => of([]))) : of([]),
      transfers: canSeeTransfers ? this.transferService.findAll().pipe(catchError(() => of([]))) : of([]),
      users: canSeeUsers ? this.userService.findAll().pipe(catchError(() => of([]))) : of([])
    }).pipe(map(({ products, categories, typeCategories, deliveries, transfers, users }) => {
      this.setStockItems(products);
      this.pendingDeliveries = canSeeDeliveries ? deliveries.filter((delivery) => delivery.state !== "DELIVERED").slice(0, 5) : [];
      const cards = [];
      if (canSeeInventory) {
        cards.push({
          label: "Productos activos",
          value: products.length,
          icon: "inventory_2",
          accent: "blue",
          path: "/products"
        }, {
          label: "Categor\xEDas",
          value: categories.length,
          icon: "category",
          accent: "purple",
          path: "/categories"
        }, {
          label: "Tipos de categor\xEDa",
          value: typeCategories.length,
          icon: "sell",
          accent: "amber",
          path: "/type-categories"
        });
      }
      if (canSeeDeliveries) {
        cards.push({
          label: "Entregas registradas",
          value: deliveries.length,
          icon: "local_shipping",
          accent: "blue",
          path: "/deliveries"
        });
      }
      if (canSeeTransfers) {
        cards.push({
          label: "Transferencias",
          value: transfers.length,
          icon: "receipt_long",
          accent: "purple",
          path: "/transfers"
        });
      }
      if (canSeeUsers) {
        cards.push({
          label: "Usuarios",
          value: users.length,
          icon: "manage_accounts",
          accent: "green",
          path: "/users"
        });
      }
      return cards;
    })).subscribe((cards) => {
      this.stats = cards;
      this.loadingStats = false;
    });
    this.stockRefreshSub = interval(STOCK_REFRESH_MS).subscribe(() => this.refreshStock(true));
  }
  ngOnDestroy() {
    this.stockRefreshSub?.unsubscribe();
  }
  refreshStock(silent = false) {
    if (this.refreshingStock) {
      return;
    }
    this.refreshingStock = true;
    this.productService.findAll({ silent }).subscribe({
      next: (products) => {
        this.stockError = false;
        this.setStockItems(products);
        const productsCard = this.stats.find((stat) => stat.path === "/products");
        if (productsCard) {
          productsCard.value = products.length;
        }
        this.refreshingStock = false;
      },
      error: () => {
        this.stockError = true;
        this.refreshingStock = false;
      }
    });
  }
  toggleStockFilter(level) {
    this.stockFilter = this.stockFilter === level ? null : level;
    this.applyStockFilter();
  }
  trackByStockItem(_, item) {
    return item.id;
  }
  setStockItems(products) {
    this.stockItems = products.map((product) => ({
      id: product.idProduct,
      name: product.nameProduct,
      category: product.nameCategory,
      stock: product.stock,
      level: getStockLevel(product.stock)
    })).sort((a, b) => a.stock - b.stock || a.name.localeCompare(b.name));
    this.stockSummary = { OK: 0, LOW: 0, CRITICAL: 0 };
    for (const item of this.stockItems) {
      this.stockSummary[item.level]++;
    }
    this.stockUpdatedAt = /* @__PURE__ */ new Date();
    this.applyStockFilter();
  }
  applyStockFilter() {
    this.visibleStockItems = this.stockFilter ? this.stockItems.filter((item) => item.level === this.stockFilter) : this.stockItems;
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(t) {
      return new (t || _DashboardComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(CategoryService), \u0275\u0275directiveInject(TypeCategoryService), \u0275\u0275directiveInject(DeliveryService), \u0275\u0275directiveInject(TransferService), \u0275\u0275directiveInject(UserService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 21, vars: 12, consts: [["statsSkeleton", ""], ["stockSkeleton", ""], [1, "vria-page"], ["subtitle", "Este es el resumen general de la operaci\xF3n VRIA.", "icon", "space_dashboard", 3, "title"], ["class", "stats-grid", 4, "ngIf", "ngIfElse"], ["aria-labelledby", "stock-light-title", 1, "vria-card", "panel", "stock-light"], [1, "panel__header"], [1, "stock-light__heading"], ["id", "stock-light-title"], ["class", "stock-light__updated", 4, "ngIf"], [1, "stock-light__actions"], ["mat-button", "", "color", "primary", "routerLink", "/products", 4, "ngIf"], ["mat-icon-button", "", "type", "button", "matTooltip", "Actualizar stock", "aria-label", "Actualizar stock", 3, "click", "disabled"], ["class", "stock-light__body", 4, "ngIf", "ngIfElse"], ["class", "vria-card panel quick-actions", 4, "ngIf"], ["class", "vria-card panel", 4, "ngIf"], [1, "stats-grid"], ["class", "stat-card vria-card", 3, "stat-card--purple", "stat-card--green", "stat-card--amber", "routerLink", 4, "ngFor", "ngForOf"], [1, "stat-card", "vria-card", 3, "routerLink"], [1, "stat-card__icon"], [1, "stat-card__body"], [1, "stat-card__value"], [1, "stat-card__label"], ["class", "stat-card stat-card--skeleton vria-card", 4, "ngFor", "ngForOf"], [1, "stat-card", "stat-card--skeleton", "vria-card"], [1, "stock-light__updated"], ["mat-button", "", "color", "primary", "routerLink", "/products"], [1, "stock-light__body"], ["role", "group", "aria-label", "Filtrar productos por nivel de stock", 1, "signal"], ["type", "button", "class", "signal__lamp", 3, "ngClass", "signal__lamp--on", "signal__lamp--selected", "signal__lamp--dimmed", "click", 4, "ngFor", "ngForOf"], [1, "stock-list"], ["class", "stock-list__filter", 4, "ngIf"], ["icon", "cloud_off", "title", "No se pudo cargar el stock", "message", "Intenta actualizar en unos segundos.", 4, "ngIf"], ["icon", "inventory_2", "title", "Sin productos", "message", "A\xFAn no hay productos registrados en el inventario.", 4, "ngIf"], ["icon", "task_alt", "title", "Nada por aqu\xED", "message", "No hay productos en este nivel.", 4, "ngIf"], ["class", "stock-list__items", 4, "ngIf"], ["type", "button", 1, "signal__lamp", 3, "click", "ngClass"], ["aria-hidden", "true", 1, "signal__bulb"], [1, "signal__text"], [1, "signal__count"], [1, "signal__label"], [1, "stock-list__filter"], ["mat-button", "", "type", "button", 3, "click"], ["icon", "cloud_off", "title", "No se pudo cargar el stock", "message", "Intenta actualizar en unos segundos."], ["icon", "inventory_2", "title", "Sin productos", "message", "A\xFAn no hay productos registrados en el inventario."], ["icon", "task_alt", "title", "Nada por aqu\xED", "message", "No hay productos en este nivel."], [1, "stock-list__items"], ["class", "stock-item", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "stock-item", 3, "ngClass"], ["aria-hidden", "true", 1, "stock-item__dot"], [1, "stock-item__info"], [1, "stock-item__name"], [1, "stock-item__category"], [1, "stock-item__stock"], [1, "stock-light__skeleton"], [1, "vria-card", "panel", "quick-actions"], [1, "quick-actions__list"], ["mat-flat-button", "", "class", "vria-btn", 3, "class", "routerLink", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", 1, "vria-btn", 3, "routerLink"], [1, "vria-card", "panel"], ["mat-button", "", "color", "primary", "routerLink", "/deliveries"], ["icon", "task_alt", "title", "Todo al d\xEDa", "message", "No hay entregas pendientes en este momento.", 4, "ngIf"], ["class", "mini-table", 4, "ngIf"], ["icon", "task_alt", "title", "Todo al d\xEDa", "message", "No hay entregas pendientes en este momento."], [1, "mini-table"], [4, "ngFor", "ngForOf"], [1, "chip"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2);
        \u0275\u0275element(1, "app-page-header", 3);
        \u0275\u0275template(2, DashboardComponent_div_2_Template, 2, 2, "div", 4)(3, DashboardComponent_ng_template_3_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(5, "section", 5)(6, "div", 6)(7, "div", 7)(8, "h2", 8);
        \u0275\u0275text(9, "Sem\xE1foro de stock");
        \u0275\u0275elementEnd();
        \u0275\u0275template(10, DashboardComponent_span_10_Template, 3, 4, "span", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 10);
        \u0275\u0275template(12, DashboardComponent_a_12_Template, 2, 0, "a", 11);
        \u0275\u0275elementStart(13, "button", 12);
        \u0275\u0275listener("click", function DashboardComponent_Template_button_click_13_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.refreshStock());
        });
        \u0275\u0275elementStart(14, "mat-icon");
        \u0275\u0275text(15, "refresh");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(16, DashboardComponent_div_16_Template, 9, 6, "div", 13)(17, DashboardComponent_ng_template_17_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275template(19, DashboardComponent_div_19_Template, 6, 1, "div", 14)(20, DashboardComponent_div_20_Template, 8, 2, "div", 15);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const statsSkeleton_r10 = \u0275\u0275reference(4);
        const stockSkeleton_r11 = \u0275\u0275reference(18);
        \u0275\u0275advance();
        \u0275\u0275property("title", "Hola, " + ((ctx.currentUser == null ? null : ctx.currentUser.name) || ""));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loadingStats)("ngIfElse", statsSkeleton_r10);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", ctx.stockUpdatedAt);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.canSeeInventory);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.refreshingStock);
        \u0275\u0275advance();
        \u0275\u0275classProp("spin", ctx.refreshingStock);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.loadingStats)("ngIfElse", stockSkeleton_r11);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.quickActions.length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.canSeeDeliveries);
      }
    }, dependencies: [NgClass, NgForOf, NgIf, RouterLink, MatIcon, MatAnchor, MatButton, MatIconButton, MatChip, MatTooltip, PageHeaderComponent, EmptyStateComponent, DatePipe, DeliveryStateLabelPipe], styles: ["\n\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 1.25rem;\n  margin-bottom: 1.75rem;\n}\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.4rem;\n  text-decoration: none;\n  color: inherit;\n  transition: transform 220ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 220ms ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--vria-shadow-hover);\n}\n.stat-card[_ngcontent-%COMP%]:hover   .stat-card__icon[_ngcontent-%COMP%] {\n  transform: scale(1.08) rotate(-4deg);\n}\n.stat-card__icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      var(--vria-blue),\n      var(--vria-blue-light));\n  color: #fff;\n  flex-shrink: 0;\n  box-shadow: 4px 4px 10px rgba(0, 163, 224, 0.35), -3px -3px 8px rgba(255, 255, 255, 0.5);\n  transition: transform 220ms cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.stat-card--purple[_ngcontent-%COMP%]   .stat-card__icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--vria-purple),\n      var(--vria-purple-light));\n}\n.stat-card--green[_ngcontent-%COMP%]   .stat-card__icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--vria-success),\n      var(--vria-success-light));\n}\n.stat-card--amber[_ngcontent-%COMP%]   .stat-card__icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--vria-warning),\n      var(--vria-warning-light));\n}\n.stat-card__body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.stat-card__value[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n}\n.stat-card__label[_ngcontent-%COMP%] {\n  color: var(--vria-text-secondary);\n  font-size: 0.85rem;\n}\n.stat-card--skeleton[_ngcontent-%COMP%] {\n  height: 84px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--vria-surface-alt) 25%,\n      var(--vria-surface) 37%,\n      var(--vria-surface-alt) 63%);\n  background-size: 400% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s ease infinite;\n  box-shadow: var(--vria-shadow-sm);\n}\n.panel[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  margin-bottom: 1.75rem;\n}\n.panel__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.75rem;\n}\n.panel__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n}\n.quick-actions__list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.85rem;\n}\n.quick-actions__list[_ngcontent-%COMP%]   a.vria-btn[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.mini-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.mini-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .mini-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 0.65rem 0.5rem;\n  border-bottom: 1px solid var(--vria-border);\n  font-size: 0.9rem;\n}\n.mini-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--vria-text-secondary);\n  font-weight: 600;\n}\n.stock-light[_ngcontent-%COMP%] {\n  --lamp-ok: var(--vria-success);\n  --lamp-low: var(--vria-warning-light);\n  --lamp-critical: var(--vria-danger);\n}\n.stock-light__heading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n.stock-light__updated[_ngcontent-%COMP%] {\n  color: var(--vria-text-secondary);\n  font-size: 0.78rem;\n}\n.stock-light__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.stock-light__actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.stock-light__body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(200px, 240px) 1fr;\n  gap: 1.5rem;\n  align-items: start;\n}\n.stock-light__skeleton[_ngcontent-%COMP%] {\n  height: 220px;\n  border-radius: var(--vria-radius-md);\n  background:\n    linear-gradient(\n      90deg,\n      var(--vria-surface-alt) 25%,\n      var(--vria-surface) 37%,\n      var(--vria-surface-alt) 63%);\n  background-size: 400% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s ease infinite;\n}\n.signal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding: 0.9rem;\n  border-radius: var(--vria-radius-lg);\n  background: var(--vria-surface-alt);\n  box-shadow: var(--vria-shadow-inset-deep);\n}\n.signal__lamp[_ngcontent-%COMP%] {\n  --lamp: var(--vria-text-secondary);\n  display: flex;\n  align-items: center;\n  gap: 0.9rem;\n  width: 100%;\n  padding: 0.6rem 0.8rem;\n  border: 2px solid transparent;\n  border-radius: var(--vria-radius-md);\n  background: var(--vria-surface);\n  color: inherit;\n  font: inherit;\n  text-align: left;\n  cursor: pointer;\n  box-shadow: var(--vria-shadow-sm);\n  transition:\n    transform 200ms cubic-bezier(0.22, 1, 0.36, 1),\n    opacity 200ms ease,\n    border-color 200ms ease;\n}\n.signal__lamp[_ngcontent-%COMP%]:hover {\n  transform: translateX(3px);\n}\n.signal__lamp[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  box-shadow: var(--vria-focus-ring);\n}\n.signal__lamp--ok[_ngcontent-%COMP%] {\n  --lamp: var(--lamp-ok);\n}\n.signal__lamp--low[_ngcontent-%COMP%] {\n  --lamp: var(--lamp-low);\n}\n.signal__lamp--critical[_ngcontent-%COMP%] {\n  --lamp: var(--lamp-critical);\n}\n.signal__lamp--selected[_ngcontent-%COMP%] {\n  border-color: var(--lamp);\n}\n.signal__lamp--dimmed[_ngcontent-%COMP%] {\n  opacity: 0.55;\n}\n.signal__bulb[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  background: var(--lamp);\n  opacity: 0.22;\n  box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.25);\n  transition: opacity 300ms ease, box-shadow 300ms ease;\n}\n.signal__lamp--on[_ngcontent-%COMP%]   .signal__bulb[_ngcontent-%COMP%] {\n  opacity: 1;\n  box-shadow:\n    0 0 16px 2px var(--lamp),\n    inset -3px -3px 6px rgba(0, 0, 0, 0.18),\n    inset 3px 3px 6px rgba(255, 255, 255, 0.45);\n}\n.signal__lamp--critical.signal__lamp--on[_ngcontent-%COMP%]   .signal__bulb[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_lamp-pulse 1.8s ease-in-out infinite;\n}\n.signal__text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.signal__count[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  line-height: 1.1;\n}\n.signal__label[_ngcontent-%COMP%] {\n  color: var(--vria-text-secondary);\n  font-size: 0.82rem;\n}\n.stock-list[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.stock-list__filter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n  margin-bottom: 0.5rem;\n  color: var(--vria-text-secondary);\n  font-size: 0.85rem;\n}\n.stock-list__items[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0 0.25rem 0 0;\n  max-height: 340px;\n  overflow-y: auto;\n}\n.stock-item[_ngcontent-%COMP%] {\n  --lamp: var(--vria-text-secondary);\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  padding: 0.65rem 0.5rem;\n  border-bottom: 1px solid var(--vria-border);\n}\n.stock-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.stock-item--ok[_ngcontent-%COMP%] {\n  --lamp: var(--vria-success);\n}\n.stock-item--low[_ngcontent-%COMP%] {\n  --lamp: var(--vria-warning);\n}\n.stock-item--critical[_ngcontent-%COMP%] {\n  --lamp: var(--vria-danger);\n}\n.stock-item__dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  background: var(--lamp);\n  box-shadow: 0 0 8px var(--lamp);\n}\n.stock-item--critical[_ngcontent-%COMP%]   .stock-item__dot[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_lamp-pulse 1.8s ease-in-out infinite;\n}\n.stock-item__info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  flex: 1;\n}\n.stock-item__name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.9rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.stock-item__category[_ngcontent-%COMP%] {\n  color: var(--vria-text-secondary);\n  font-size: 0.78rem;\n}\n.stock-item__stock[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  flex-shrink: 0;\n}\n.stock-item__stock[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  color: var(--lamp);\n}\n.stock-item__stock[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--vria-text-secondary);\n  font-size: 0.75rem;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 900ms linear infinite;\n}\n@media (max-width: 720px) {\n  .stock-light__body[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .signal[_ngcontent-%COMP%] {\n    flex-direction: row;\n    padding: 0.6rem;\n    gap: 0.5rem;\n  }\n  .signal__lamp[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.4rem;\n    padding: 0.6rem 0.3rem;\n    text-align: center;\n  }\n  .signal__lamp[_ngcontent-%COMP%]:hover {\n    transform: translateY(-2px);\n  }\n  .signal__bulb[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n  }\n  .signal__text[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n}\n@keyframes _ngcontent-%COMP%_lamp-pulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.12);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.chip[_ngcontent-%COMP%] {\n  background: rgba(139, 47, 201, 0.12) !important;\n  color: var(--vria-purple-dark) !important;\n  font-size: 0.75rem !important;\n  min-height: 24px !important;\n}\n.chip--ready[_ngcontent-%COMP%] {\n  background: rgba(0, 163, 224, 0.12) !important;\n  color: var(--vria-blue-dark) !important;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: -100% 0;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */"], data: { animation: [listStagger] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/features/dashboard/dashboard.component.ts", lineNumber: 83 });
})();

// src/app/features/dashboard/dashboard-routing.module.ts
var routes = [{ path: "", component: DashboardComponent, title: "Panel \xB7 VRIA" }];
var DashboardRoutingModule = class _DashboardRoutingModule {
  static {
    this.\u0275fac = function DashboardRoutingModule_Factory(t) {
      return new (t || _DashboardRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DashboardRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/features/dashboard/dashboard.module.ts
var DashboardModule = class _DashboardModule {
  static {
    this.\u0275fac = function DashboardModule_Factory(t) {
      return new (t || _DashboardModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DashboardModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, DashboardRoutingModule] });
  }
};
export {
  DashboardModule
};
//# sourceMappingURL=chunk-SFOMSDIJ.js.map
