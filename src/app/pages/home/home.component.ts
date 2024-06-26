import { Component, inject } from '@angular/core';

import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/types/types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private prodS$ = inject(ProductsService);

  public prodArray: Product[] = [];

  constructor() {
    this.getProds();
  }

  getProds(): void {
    this.prodS$.getProducts().subscribe(
      {
        next: (data) => {
          this.prodArray = data
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }
}
