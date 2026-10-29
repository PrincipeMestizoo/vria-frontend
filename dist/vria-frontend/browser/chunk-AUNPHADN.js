import {
  ActivityNotificationService
} from "./chunk-CDVYEXS6.js";
import {
  STOCK_LEVELS,
  STOCK_LEVEL_LABELS,
  getStockLevel
} from "./chunk-6PUFV6PR.js";
import {
  ProductService
} from "./chunk-OC3SX2LR.js";
import {
  CurrencyPipe,
  DefaultValueAccessor,
  EmptyStateComponent,
  MatButton,
  MatFormField,
  MatIcon,
  MatIconButton,
  MatInput,
  MatLabel,
  MatOption,
  MatPaginator,
  MatSelect,
  MatSelectTrigger,
  MatSuffix,
  MatTooltip,
  NgClass,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  PRODUCT_CHANGE_LABELS,
  PageHeaderComponent,
  RecentChangesComponent,
  RelativeTimePipe,
  RouterModule,
  SharedModule,
  catchError,
  finalize,
  forkJoin,
  latestChangeByProduct,
  listStagger,
  of,
  prioritizeChanged,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IREKQD7O.js";

// src/app/features/catalog/catalog-list/catalog-list.component.ts
var _c0 = () => [];
function CatalogListComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function CatalogListComponent_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.searchTerm = "";
      return \u0275\u0275resetView(ctx_r2.applyFilters());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function CatalogListComponent_mat_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 22);
    \u0275\u0275text(1, "search");
    \u0275\u0275elementEnd();
  }
}
function CatalogListComponent_mat_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r4 = ctx.$implicit;
    \u0275\u0275property("value", category_r4.idCategory);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r4.nameCategory, " ");
  }
}
function CatalogListComponent_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275element(1, "span", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "level-option__dot--" + ctx_r2.levelFilter.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.levelLabels[ctx_r2.levelFilter], " ");
  }
}
function CatalogListComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "Todos");
  }
}
function CatalogListComponent_mat_option_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 23)(1, "span", 24);
    \u0275\u0275element(2, "span", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const level_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", level_r5);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", "level-option__dot--" + level_r5.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.levelLabels[level_r5], " ");
  }
}
function CatalogListComponent_p_29_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function CatalogListComponent_p_29_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clearFilters());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "filter_alt_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Limpiar filtros ");
    \u0275\u0275elementEnd();
  }
}
function CatalogListComponent_p_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 26);
    \u0275\u0275text(1);
    \u0275\u0275template(2, CatalogListComponent_p_29_button_2_Template, 4, 0, "button", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r2.filtered.length, " ", ctx_r2.filtered.length === 1 ? "producto" : "productos", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasFilters);
  }
}
function CatalogListComponent_div_30_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "div", 32);
    \u0275\u0275elementStart(2, "div", 33);
    \u0275\u0275element(3, "span", 34)(4, "span", 35);
    \u0275\u0275elementEnd()();
  }
}
function CatalogListComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275template(1, CatalogListComponent_div_30_div_1_Template, 5, 0, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0).constructor(ctx_r2.pageSize));
  }
}
function CatalogListComponent_div_31_article_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 46);
    \u0275\u0275listener("error", function CatalogListComponent_div_31_article_1_img_2_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r7);
      const item_r8 = \u0275\u0275nextContext().$implicit;
      return \u0275\u0275resetView(item_r8.imageFailed = true);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", item_r8.product.photo, \u0275\u0275sanitizeUrl)("alt", item_r8.product.nameProduct);
  }
}
function CatalogListComponent_div_31_article_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "mat-icon");
    \u0275\u0275text(2, "image_not_supported");
    \u0275\u0275elementEnd()();
  }
}
function CatalogListComponent_div_31_article_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48)(1, "mat-icon");
    \u0275\u0275text(2, "auto_awesome");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "relativeTime");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matTooltip", item_r8.change.title + " por " + item_r8.change.actorName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r2.changeLabels[item_r8.change.action], " \xB7 ", \u0275\u0275pipeBind1(4, 3, item_r8.change.createdAt), " ");
  }
}
function CatalogListComponent_div_31_article_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 37)(1, "div", 32);
    \u0275\u0275template(2, CatalogListComponent_div_31_article_1_img_2_Template, 1, 2, "img", 38)(3, CatalogListComponent_div_31_article_1_ng_template_3_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(5, CatalogListComponent_div_31_article_1_span_5_Template, 5, 5, "span", 39);
    \u0275\u0275elementStart(6, "span", 40);
    \u0275\u0275element(7, "span", 41);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 33)(10, "h3", 42);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 43)(13, "span", 44);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 45)(17, "mat-icon");
    \u0275\u0275text(18, "inventory_2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const noImage_r9 = \u0275\u0275reference(4);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("product-card--changed", item_r8.change)("product-card--highlight", ctx_r2.highlightedId === item_r8.product.idProduct);
    \u0275\u0275property("id", "product-" + item_r8.product.idProduct)("ngClass", "product-card--" + item_r8.level.toLowerCase());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !item_r8.imageFailed)("ngIfElse", noImage_r9);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", item_r8.change);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.levelLabels[item_r8.level], " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", item_r8.product.nameProduct);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r8.product.nameProduct);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(15, 14, item_r8.product.price, "COP", "symbol-narrow", "1.0-0"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", item_r8.product.stock, " und. ");
  }
}
function CatalogListComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275template(1, CatalogListComponent_div_31_article_1_Template, 20, 19, "article", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("@listStagger", ctx_r2.pageIndex + "|" + ctx_r2.searchTerm + "|" + ctx_r2.categoryFilter + "|" + ctx_r2.levelFilter);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.pageItems)("ngForTrackBy", ctx_r2.trackById);
  }
}
function CatalogListComponent_app_empty_state_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 49);
  }
}
function CatalogListComponent_app_empty_state_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 50);
  }
}
function CatalogListComponent_mat_paginator_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-paginator", 51);
    \u0275\u0275listener("page", function CatalogListComponent_mat_paginator_34_Template_mat_paginator_page_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPage($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("length", ctx_r2.filtered.length)("pageSize", ctx_r2.pageSize)("pageIndex", ctx_r2.pageIndex)("hidePageSize", true)("showFirstLastButtons", true);
  }
}
var HIGHLIGHT_MS = 1800;
var PAGE_SIZE = 12;
var CatalogListComponent = class _CatalogListComponent {
  constructor(productService, activityService) {
    this.productService = productService;
    this.activityService = activityService;
    this.pageSize = PAGE_SIZE;
    this.levelLabels = STOCK_LEVEL_LABELS;
    this.stockLevels = STOCK_LEVELS;
    this.changeLabels = PRODUCT_CHANGE_LABELS;
    this.loading = true;
    this.items = [];
    this.filtered = [];
    this.pageItems = [];
    this.pageIndex = 0;
    this.recentChanges = [];
    this.highlightedId = null;
    this.categories = [];
    this.searchTerm = "";
    this.categoryFilter = "ALL";
    this.levelFilter = "ALL";
  }
  ngOnInit() {
    forkJoin({
      products: this.productService.findAll(),
      // Si el historial falla el catalogo se muestra igual, sin resaltar cambios
      changes: this.activityService.recentProductChanges().pipe(catchError(() => of([])))
    }).pipe(finalize(() => this.loading = false)).subscribe(({ products, changes }) => {
      const latest = latestChangeByProduct(changes);
      this.recentChanges = changes;
      this.items = prioritizeChanged(products, (p) => p.idProduct, latest).map((product) => ({
        product,
        level: getStockLevel(product.stock),
        imageFailed: !product.photo,
        change: latest.get(product.idProduct)
      }));
      this.categories = this.extractCategories(products);
      this.applyFilters();
    });
  }
  /** Lleva al usuario a la tarjeta del producto elegido en la ventana de cambios. */
  focusProduct(change) {
    if (this.hasFilters) {
      this.clearFilters();
    }
    const index = this.filtered.findIndex((item) => item.product.idProduct === change.entityId);
    if (index < 0) {
      return;
    }
    this.setPage(Math.floor(index / this.pageSize));
    this.highlightedId = change.entityId;
    setTimeout(() => document.getElementById(`product-${change.entityId}`)?.scrollIntoView({ behavior: "smooth", block: "center" }));
    setTimeout(() => this.highlightedId = null, HIGHLIGHT_MS);
  }
  get hasFilters() {
    return this.searchTerm.trim() !== "" || this.categoryFilter !== "ALL" || this.levelFilter !== "ALL";
  }
  applyFilters() {
    const term = this.searchTerm.trim().toLowerCase();
    this.filtered = this.items.filter(({ product, level }) => (!term || product.nameProduct.toLowerCase().includes(term)) && (this.categoryFilter === "ALL" || product.idCategory === this.categoryFilter) && (this.levelFilter === "ALL" || level === this.levelFilter));
    this.setPage(0);
  }
  clearFilters() {
    this.searchTerm = "";
    this.categoryFilter = "ALL";
    this.levelFilter = "ALL";
    this.applyFilters();
  }
  onPage(event) {
    this.setPage(event.pageIndex);
  }
  trackById(_, item) {
    return item.product.idProduct;
  }
  setPage(index) {
    this.pageIndex = index;
    const start = index * this.pageSize;
    this.pageItems = this.filtered.slice(start, start + this.pageSize);
  }
  extractCategories(products) {
    const byId = /* @__PURE__ */ new Map();
    products.forEach((p) => byId.set(p.idCategory, p.nameCategory));
    return [...byId].map(([idCategory, nameCategory]) => ({ idCategory, nameCategory })).sort((a, b) => a.nameCategory.localeCompare(b.nameCategory));
  }
  static {
    this.\u0275fac = function CatalogListComponent_Factory(t) {
      return new (t || _CatalogListComponent)(\u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(ActivityNotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CatalogListComponent, selectors: [["app-catalog-list"]], decls: 35, vars: 16, consts: [["allLevels", ""], ["noImage", ""], [1, "vria-page"], ["title", "Cat\xE1logo", "subtitle", "Productos disponibles en VRIA.", "icon", "storefront"], ["title", "Novedades en productos", 3, "selectChange", "changes"], [1, "list-toolbar", "catalog-toolbar"], ["appearance", "outline", 1, "list-toolbar__search"], ["matInput", "", "placeholder", "Nombre del producto", 3, "ngModelChange", "ngModel"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Limpiar b\xFAsqueda", 3, "click", 4, "ngIf"], ["matSuffix", "", 4, "ngIf"], [1, "catalog-toolbar__filters"], ["appearance", "outline", 1, "catalog-toolbar__select"], [3, "ngModelChange", "ngModel"], ["value", "ALL"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "level-option", 4, "ngIf", "ngIfElse"], ["class", "catalog-results", 4, "ngIf"], ["class", "catalog-grid", 4, "ngIf"], ["icon", "storefront", "title", "Cat\xE1logo vac\xEDo", "message", "A\xFAn no hay productos registrados.", 4, "ngIf"], ["icon", "search_off", "title", "Sin resultados", "message", "Ning\xFAn producto coincide con la b\xFAsqueda o los filtros seleccionados.", 4, "ngIf"], ["class", "catalog-paginator", 3, "length", "pageSize", "pageIndex", "hidePageSize", "showFirstLastButtons", "page", 4, "ngIf"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Limpiar b\xFAsqueda", 3, "click"], ["matSuffix", ""], [3, "value"], [1, "level-option"], [1, "level-option__dot", 3, "ngClass"], [1, "catalog-results"], ["mat-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-button", "", "color", "primary", 3, "click"], [1, "catalog-grid"], ["class", "product-card product-card--skeleton", 4, "ngFor", "ngForOf"], [1, "product-card", "product-card--skeleton"], [1, "product-card__media"], [1, "product-card__body"], [1, "skeleton-line"], [1, "skeleton-line", "skeleton-line--short"], ["class", "product-card", 3, "id", "ngClass", "product-card--changed", "product-card--highlight", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "product-card", 3, "id", "ngClass"], ["loading", "lazy", 3, "src", "alt", "error", 4, "ngIf", "ngIfElse"], ["class", "change-ribbon", 3, "matTooltip", 4, "ngIf"], [1, "stock-badge"], [1, "stock-badge__dot"], [1, "product-card__name", 3, "matTooltip"], [1, "product-card__footer"], [1, "product-card__price"], [1, "product-card__stock"], ["loading", "lazy", 3, "error", "src", "alt"], [1, "product-card__placeholder"], [1, "change-ribbon", 3, "matTooltip"], ["icon", "storefront", "title", "Cat\xE1logo vac\xEDo", "message", "A\xFAn no hay productos registrados."], ["icon", "search_off", "title", "Sin resultados", "message", "Ning\xFAn producto coincide con la b\xFAsqueda o los filtros seleccionados."], [1, "catalog-paginator", 3, "page", "length", "pageSize", "pageIndex", "hidePageSize", "showFirstLastButtons"]], template: function CatalogListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2);
        \u0275\u0275element(1, "app-page-header", 3);
        \u0275\u0275elementStart(2, "app-recent-changes", 4);
        \u0275\u0275listener("selectChange", function CatalogListComponent_Template_app_recent_changes_selectChange_2_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.focusProduct($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 5)(4, "mat-form-field", 6)(5, "mat-label");
        \u0275\u0275text(6, "Buscar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function CatalogListComponent_Template_input_ngModelChange_7_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function CatalogListComponent_Template_input_ngModelChange_7_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.applyFilters());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, CatalogListComponent_button_8_Template, 3, 0, "button", 8)(9, CatalogListComponent_mat_icon_9_Template, 2, 0, "mat-icon", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 10)(11, "mat-form-field", 11)(12, "mat-label");
        \u0275\u0275text(13, "Categor\xEDa");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "mat-select", 12);
        \u0275\u0275twoWayListener("ngModelChange", function CatalogListComponent_Template_mat_select_ngModelChange_14_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.categoryFilter, $event) || (ctx.categoryFilter = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function CatalogListComponent_Template_mat_select_ngModelChange_14_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.applyFilters());
        });
        \u0275\u0275elementStart(15, "mat-option", 13);
        \u0275\u0275text(16, "Todas");
        \u0275\u0275elementEnd();
        \u0275\u0275template(17, CatalogListComponent_mat_option_17_Template, 2, 2, "mat-option", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "mat-form-field", 11)(19, "mat-label");
        \u0275\u0275text(20, "Nivel de stock");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "mat-select", 12);
        \u0275\u0275twoWayListener("ngModelChange", function CatalogListComponent_Template_mat_select_ngModelChange_21_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.levelFilter, $event) || (ctx.levelFilter = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function CatalogListComponent_Template_mat_select_ngModelChange_21_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.applyFilters());
        });
        \u0275\u0275elementStart(22, "mat-select-trigger");
        \u0275\u0275template(23, CatalogListComponent_span_23_Template, 3, 2, "span", 15)(24, CatalogListComponent_ng_template_24_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "mat-option", 13);
        \u0275\u0275text(27, "Todos");
        \u0275\u0275elementEnd();
        \u0275\u0275template(28, CatalogListComponent_mat_option_28_Template, 4, 3, "mat-option", 14);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(29, CatalogListComponent_p_29_Template, 3, 3, "p", 16)(30, CatalogListComponent_div_30_Template, 2, 2, "div", 17)(31, CatalogListComponent_div_31_Template, 2, 3, "div", 17)(32, CatalogListComponent_app_empty_state_32_Template, 1, 0, "app-empty-state", 18)(33, CatalogListComponent_app_empty_state_33_Template, 1, 0, "app-empty-state", 19)(34, CatalogListComponent_mat_paginator_34_Template, 1, 5, "mat-paginator", 20);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const allLevels_r11 = \u0275\u0275reference(25);
        \u0275\u0275advance(2);
        \u0275\u0275property("changes", ctx.recentChanges);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.searchTerm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.searchTerm);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.categoryFilter);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.categories);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.levelFilter);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.levelFilter !== "ALL")("ngIfElse", allLevels_r11);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.stockLevels);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.items.length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.pageItems.length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.items.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.items.length > 0 && ctx.filtered.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.filtered.length > ctx.pageSize);
      }
    }, dependencies: [NgClass, NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, MatIcon, MatButton, MatIconButton, MatFormField, MatLabel, MatSuffix, MatInput, MatSelect, MatSelectTrigger, MatOption, MatTooltip, MatPaginator, PageHeaderComponent, EmptyStateComponent, RecentChangesComponent, CurrencyPipe, RelativeTimePipe], styles: ["\n\n.catalog-toolbar[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.catalog-toolbar__filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.catalog-toolbar__select[_ngcontent-%COMP%] {\n  width: 12rem;\n  margin-bottom: -1.25em;\n}\n@media (max-width: 600px) {\n  .catalog-toolbar__filters[_ngcontent-%COMP%], .catalog-toolbar__select[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .catalog-toolbar__select[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n  }\n}\n.catalog-results[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  min-height: 2.25rem;\n  margin: 0 0 0.5rem;\n  color: var(--vria-text-secondary);\n  font-size: 0.875rem;\n}\n.level-option[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.level-option__dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.level-option__dot--ok[_ngcontent-%COMP%] {\n  background: var(--vria-success);\n}\n.level-option__dot--low[_ngcontent-%COMP%] {\n  background: var(--vria-warning);\n}\n.level-option__dot--critical[_ngcontent-%COMP%] {\n  background: var(--vria-danger);\n}\n.catalog-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 1.5rem;\n  padding: 0.5rem 0.25rem 1rem;\n}\n@media (max-width: 1200px) {\n  .catalog-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n@media (max-width: 900px) {\n  .catalog-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 520px) {\n  .catalog-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.product-card[_ngcontent-%COMP%] {\n  --lamp: var(--vria-text-secondary);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  background: var(--vria-surface);\n  border-radius: var(--vria-radius-lg);\n  box-shadow: var(--vria-shadow);\n  transition: transform 260ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 260ms cubic-bezier(0.22, 1, 0.36, 1);\n}\n.product-card--ok[_ngcontent-%COMP%] {\n  --lamp: var(--vria-success);\n}\n.product-card--low[_ngcontent-%COMP%] {\n  --lamp: var(--vria-warning);\n}\n.product-card--critical[_ngcontent-%COMP%] {\n  --lamp: var(--vria-danger);\n}\n.product-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: var(--vria-shadow-hover);\n}\n.product-card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.07);\n}\n.product-card__media[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 4/3;\n  overflow: hidden;\n  background: var(--vria-surface-alt);\n}\n.product-card__media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 420ms cubic-bezier(0.22, 1, 0.36, 1);\n}\n.product-card__placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  color: var(--vria-text-secondary);\n}\n.product-card__placeholder[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  width: 3rem;\n  height: 3rem;\n  opacity: 0.5;\n}\n.product-card__body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding: 1rem 1.15rem 1.2rem;\n  flex: 1;\n}\n.product-card__name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 600;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.product-card__footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n  margin-top: auto;\n}\n.product-card__price[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  background: var(--vria-gradient);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.product-card__stock[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--lamp);\n}\n.product-card__stock[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.stock-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.75rem;\n  left: 0.75rem;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.3rem 0.7rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--vria-text-primary);\n  background: color-mix(in srgb, var(--vria-surface) 88%, transparent);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  box-shadow: var(--vria-shadow-sm);\n}\n.stock-badge__dot[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background: var(--lamp);\n  box-shadow: 0 0 8px var(--lamp);\n}\n.product-card--critical[_ngcontent-%COMP%]   .stock-badge__dot[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_catalog-pulse 1.8s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_catalog-pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.35;\n  }\n}\n.product-card--skeleton[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.product-card--skeleton[_ngcontent-%COMP%]   .product-card__media[_ngcontent-%COMP%], .product-card--skeleton[_ngcontent-%COMP%]   .skeleton-line[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_catalog-shimmer 1.4s ease-in-out infinite;\n}\n.skeleton-line[_ngcontent-%COMP%] {\n  display: block;\n  height: 0.9rem;\n  border-radius: 6px;\n  background: var(--vria-surface-alt);\n}\n.skeleton-line--short[_ngcontent-%COMP%] {\n  width: 45%;\n}\n@keyframes _ngcontent-%COMP%_catalog-shimmer {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n.catalog-paginator[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  background: transparent;\n}\n@media (prefers-reduced-motion: reduce) {\n  .product-card[_ngcontent-%COMP%], .product-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    transition: none;\n  }\n  .product-card[_ngcontent-%COMP%]:hover {\n    transform: none;\n  }\n  .product-card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n    transform: none;\n  }\n  .product-card--critical[_ngcontent-%COMP%]   .stock-badge__dot[_ngcontent-%COMP%], .product-card--skeleton[_ngcontent-%COMP%]   .product-card__media[_ngcontent-%COMP%], .skeleton-line[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n.product-card--changed[_ngcontent-%COMP%] {\n  outline: 2px solid color-mix(in srgb, var(--vria-purple) 45%, transparent);\n  outline-offset: -2px;\n}\n.product-card--highlight[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_cardPulse 1.6s ease-out;\n}\n@keyframes _ngcontent-%COMP%_cardPulse {\n  0%, 100% {\n    box-shadow: var(--vria-shadow);\n  }\n  30% {\n    box-shadow: 0 0 0 6px color-mix(in srgb, var(--vria-accent) 35%, transparent), var(--vria-shadow-hover);\n  }\n}\n.change-ribbon[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0.75rem;\n  left: 0.75rem;\n  z-index: 1;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  max-width: calc(100% - 1.5rem);\n  padding: 0.25rem 0.6rem 0.25rem 0.45rem;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: #fff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  background: var(--vria-gradient-accent);\n  box-shadow: 0 4px 12px rgba(107, 31, 158, 0.35);\n}\n.change-ribbon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=catalog-list.component.css.map */"], data: { animation: [listStagger] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CatalogListComponent, { className: "CatalogListComponent", filePath: "src/app/features/catalog/catalog-list/catalog-list.component.ts", lineNumber: 39 });
})();

// src/app/features/catalog/catalog-routing.module.ts
var routes = [{ path: "", component: CatalogListComponent, title: "Cat\xE1logo \xB7 VRIA" }];
var CatalogRoutingModule = class _CatalogRoutingModule {
  static {
    this.\u0275fac = function CatalogRoutingModule_Factory(t) {
      return new (t || _CatalogRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CatalogRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/features/catalog/catalog.module.ts
var CatalogModule = class _CatalogModule {
  static {
    this.\u0275fac = function CatalogModule_Factory(t) {
      return new (t || _CatalogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CatalogModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, CatalogRoutingModule] });
  }
};
export {
  CatalogModule
};
//# sourceMappingURL=chunk-AUNPHADN.js.map
