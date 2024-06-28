import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { Product } from '../../types/types';

@Component({
  selector: 'Homecard',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.css'
})
export class HomeCardComponent {

  @Input() product: Product
}
