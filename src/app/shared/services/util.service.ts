import { Injectable, inject, signal } from '@angular/core';
import { Product } from '../types/types';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  public wishlist: Product[] = [];
  public isLoading = signal<boolean>(false);
  public showDriver = signal<boolean>(false);

  public document = inject(DOCUMENT);
  constructor() {
    this.getWishlist();
  }

  public runLoading(): void {
    this.setIsLoading(true);
    setTimeout(() => {
      this.setIsLoading(false);
    }, 2000);
  }

  private setIsLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  public runDriver(): void {
    this.showDriver.update(bool => !bool);
  }

  public getWishlist(): void {
    this.wishlist = JSON.parse(this.document.defaultView.localStorage?.getItem('wishlist') || '[]');
  }
  private setWishList(): void {
    this.document.defaultView.localStorage?.setItem('wishlist', JSON.stringify(this.wishlist));
  }

  public addToWishlist(product: Product): void {
    this.wishlist.push(product);
    this.setWishList();
  }

  public removeToWishlist(id: number): void {
    this.wishlist = this.wishlist.filter((prod) => prod.id !== id);
    this.setWishList();
  }
}
