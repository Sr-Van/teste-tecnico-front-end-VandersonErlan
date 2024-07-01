import { Component, Input, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { Product } from '../../types/types';
import { CartService } from '../../services/cart.service';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'Homecard',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.css'
})
export class HomeCardComponent {

  private cart$ = inject(CartService);
  private utS$ = inject(UtilService);

  @Input() product: Product;

  public addItemToCart(product: Product): void {
    this.cart$.addItemToCart(product);
    this.cart$.setCart();
    this.cart$.getCartLength();

    this.utS$.runDriver();
  }
}
