import { Component, HostListener, inject } from '@angular/core';

import { CartService } from '../../shared/services/cart.service';

import { CartCardComponent } from '../../shared/components/cart-card/cart-card.component';
import { UtilService } from '../../shared/services/util.service';
import { CurrencyPipe } from '@angular/common';
import { ConfirmationComponent } from '../../shared/components/confirmation/confirmation.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartCardComponent, CurrencyPipe, ConfirmationComponent, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  public cart$ = inject(CartService)
  public utS$ = inject(UtilService);

  public startConfirmation: boolean = false;

  constructor() {
    this.utS$.runLoading();
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if(event.key === 'Escape' && this.startConfirmation) {
      this.startConfirmation = false;
    }
  }

  @HostListener('document:click', ['$event'])
  handleMouseEvent(event: MouseEvent) {
    //declarando target como elemento HTML para acessar o DOM corretamente
    const target = event.target as HTMLElement;

    if(target.classList.contains('overlay') && this.startConfirmation) {
      setTimeout(() => {
        this.startConfirmation = false;
      }, 2000);
    }
  }

}
