import { Component, Input, inject } from '@angular/core';
import { Product } from '../../types/types';
import { CartService } from '../../services/cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'c-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart-card.component.html',
  styleUrl: './cart-card.component.css'
})
export class CartCardComponent {
  private cart$ = inject(CartService);

  @Input() product: Product

  public removeItem(id: number): void {
    this.cart$.removeItemFromCart(id);
  }

  public calcTotal(price: number, quantity: number): number {
    return price * quantity;
  }

}
