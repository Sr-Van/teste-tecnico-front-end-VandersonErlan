import { animate, style, transition, trigger } from '@angular/animations';
import { Component, effect, inject } from '@angular/core';
import { UtilService } from '../../services/util.service';
import { Product } from '../../types/types';
import { CartService } from '../../services/cart.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'c-driver',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cart-drive.component.html',
  styleUrl: './cart-drive.component.css',
  animations: [
    trigger('enterAnim', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('0.3s 300ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({transform: 'translateY(0)', opacity: 1}),
        animate('150ms ease-out', style({ transform: 'translateY(100%)', opacity: 0 }))
      ])

    ])
  ],
})
export class CartDriveComponent {

  public utS$ = inject(UtilService);
  private cart$ = inject(CartService);

  public show: boolean = false;
  public item: Product;

  constructor() {
    effect(() => {
      this.show = this.utS$.showDriver();
      if(this.show) {
        this.item = this.cart$.lastItemAdded();
      }
    })
  }

  public close(): void {
    this.utS$.runDriver();
  }
}
