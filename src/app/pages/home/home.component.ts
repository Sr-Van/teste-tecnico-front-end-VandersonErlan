import { Component, inject } from '@angular/core';

import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/types/types';
import { UtilService } from '../../shared/services/util.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private prodS$ = inject(ProductsService);
  public utS$ = inject(UtilService)

  public prodArray: Product[] = [];
  public filteredProdArray: Product[] = [];
  public selectValue: number = 0;

  constructor() {
    this.getProds();
  }

  private getProds(): void {
    this.prodS$.getProducts().subscribe(
      {
        next: (data) => {
          this.prodArray = data
          this.filteredProdArray = this.prodArray
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }

  public handleSelectChange(event: Event): void {

    this.selectValue = Number((event.target as HTMLInputElement).value)

    switch (this.selectValue) {
      case 0:
        this.filteredProdArray = this.prodArray
        break
      case 1:
        this.sortByPriceMin()
        break
      case 2:
        this.sortByPriceMax()
        break
    }
  }

  private sortByPriceMax(): void {
    this.utS$.runLoading();
    this.filteredProdArray = this.prodArray.sort((a, b) => b.price - a.price)
  }

  private sortByPriceMin(): void {
    this.utS$.runLoading();
    this.filteredProdArray = this.prodArray.sort((a, b) => a.price - b.price)
  }
}
