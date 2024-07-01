import { Component, Input } from '@angular/core';
import { Product } from '../../types/types';

@Component({
  selector: 'c-card',
  standalone: true,
  imports: [],
  templateUrl: './cart-card.component.html',
  styleUrl: './cart-card.component.css'
})
export class CartCardComponent {

  @Input() product: Product

}
