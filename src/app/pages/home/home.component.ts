import { Component, inject } from '@angular/core';

import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/types/types';
import { UtilService } from '../../shared/services/util.service';

import { HomeCardComponent } from '../../shared/components/home-card/home-card.component';
import { CartDriveComponent } from '../../shared/components/cart-drive/cart-drive.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeCardComponent, CartDriveComponent],
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

  public handleSearchButton(search: string): void {
    if(search.length === 0) return
    this.filterBySearch(search)
  }

  public handleSearchKey(event: KeyboardEvent, search: string): void {
    if(event.key === 'Enter') {
      this.handleSearchButton(search)
    }
  }

  private filterBySearch(searchValue: string): void {
    this.utS$.runLoading();
    this.filteredProdArray = this.prodArray.filter((prod) => prod.product.toLowerCase().includes(searchValue.toLowerCase()))
    this.selectValue = 0;
  }

  private sortByPriceMax(): void {
    this.utS$.runLoading();
    this.filteredProdArray = this.filteredProdArray.sort((a, b) => b.price - a.price)
  }

  private sortByPriceMin(): void {
    this.utS$.runLoading();
    this.filteredProdArray = this.filteredProdArray.sort((a, b) => a.price - b.price)
  }
}
