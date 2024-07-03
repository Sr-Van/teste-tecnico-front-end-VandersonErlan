import { Component, inject } from '@angular/core';

import { CartService } from '../../shared/services/cart.service';

import { CartCardComponent } from '../../shared/components/cart-card/cart-card.component';
import { UtilService } from '../../shared/services/util.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartCardComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  public cart$ = inject(CartService)
  public utS$ = inject(UtilService);

  constructor() {
    this.utS$.runLoading();
  }

}
