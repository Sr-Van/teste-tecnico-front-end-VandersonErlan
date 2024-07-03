import { Component, Input, inject } from '@angular/core';
import { Product } from '../../types/types';
import { CartService } from '../../services/cart.service';
import { CurrencyPipe } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'c-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart-card.component.html',
  styleUrl: './cart-card.component.css'
})
export class CartCardComponent {
  private cart$ = inject(CartService);
  private prod$ = inject(ProductsService);
  public utS$ = inject(UtilService);

  @Input() product: Product
  public baseProduct: Product;

  constructor() {
    this.prod$.getProducts().subscribe(
      {
        next: (data) => {
          this.baseProduct = data.find((prod) => prod.id === this.product.id);
        }
      }
    )
  }

  public removeItem(id: number): void {
    this.cart$.removeItemFromCart(id);
  }

  public calcTotal(price: number, quantity: number): number {
    return price * quantity;
  }

  public handleIncrease(): void {
    this.cart$.increaseQuantity(this.product.id);
  }

  public handleDecrease(): void {
    this.cart$.decreaseQuantity(this.product.id);
  }

}
