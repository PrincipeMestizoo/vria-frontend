import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { finalize } from 'rxjs';
import { ProductService } from '../../../core/services/product.service';
import { ProductResponseDTO } from '../../../core/models';
import { listStagger } from '../../../shared/animations/animations';
import { STOCK_LEVEL_LABELS, StockLevel, getStockLevel } from '../../../shared/utils/stock-level';
import { StockOutDialogComponent } from '../stock-out-dialog/stock-out-dialog.component';

interface ProductCard {
  product: ProductResponseDTO;
  level: StockLevel;
  imageFailed: boolean;
}

@Component({
  selector: 'app-stock-out-form',
  templateUrl: './stock-out-form.component.html',
  styleUrl: './stock-out-form.component.scss',
  animations: [listStagger],
})
export class StockOutFormComponent implements OnInit {
  readonly levelLabels = STOCK_LEVEL_LABELS;
  loading = true;
  cards: ProductCard[] = [];
  filtered: ProductCard[] = [];
  selected: ProductCard | null = null;
  searchTerm = '';

  constructor(
    private readonly productService: ProductService,
    private readonly dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.productService
      .findAll()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((products) => {
        this.cards = products.map((product) => ({
          product,
          level: getStockLevel(product.stock),
          imageFailed: !product.photo,
        }));
        this.applyFilter();
      });
  }

  applyFilter(): void {
    const term = this.searchTerm.trim().toLowerCase();
    this.filtered = this.cards.filter(
      ({ product }) =>
        !term ||
        product.nameProduct.toLowerCase().includes(term) ||
        (product.reference ?? '').toLowerCase().includes(term)
    );
  }

  // Seleccion unica: tocar la tarjeta seleccionada la deselecciona
  select(card: ProductCard): void {
    if (card.product.stock <= 0) {
      return;
    }
    this.selected = this.selected === card ? null : card;
  }

  openForm(): void {
    const card = this.selected;
    if (!card) {
      return;
    }

    const ref = this.dialog.open(StockOutDialogComponent, {
      width: '600px',
      maxWidth: '95vw',
      data: { product: card.product },
    });

    ref.afterClosed().subscribe((updated) => {
      if (!updated) {
        return;
      }
      card.product = updated;
      card.level = getStockLevel(updated.stock);
      this.selected = null;
    });
  }

  trackById(_: number, card: ProductCard): number {
    return card.product.idProduct;
  }
}
