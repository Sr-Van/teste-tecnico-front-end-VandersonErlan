import { Injectable, inject, signal } from '@angular/core';
import { Product } from '../types/types';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private document = inject(DOCUMENT);

  public cartArray: Product[] = [];
  public cartTotal = signal<number>(0);
  public cartLen = signal<number>(0);

  constructor() {
    this.getCart();
    this.getCartLength();
    this.setCartTotal();
  }

  public setCart(): void {
    this.filterCart();
    this.document.defaultView.localStorage?.setItem('cart', JSON.stringify(this.cartArray));
  }

  public getCart(): void {
    this.cartArray = JSON.parse(this.document?.defaultView?.localStorage?.getItem('cart') || '[]');
    this.setCart();
  }

  public getCartLength(): void {
    const uniq = [...new Set(this.cartArray.map((prod) => prod.id))];
    this.cartLen.set(uniq.length);
  }

  public setCartTotal(): void {
    this.cartTotal.set(this.cartArray.reduce((acc, curr) => acc + curr.price, 0));
  }

  public addItemToCart(product: Product): void {
    product.quantity = 1;
    this.cartArray.push(product);
    this.setCart();
    this.setCartTotal();
  }

  public removeItemFromCart(id: number): void {
    this.cartArray = this.cartArray.filter((prod) => prod.id !== id);
    this.setCart();
    this.setCartTotal();
  }

  private filterCart(): void {
    //filtrando para que caso o usuario clique mais de uma vez para adicionar o item, ele acumule na quantidade e não fique repetindo
    let arr = []

    this.cartArray.forEach((prod) => {
      if(arr.some((item) => item.id === prod.id)) {
        arr = arr.map((item) => {
          if(item.id === prod.id) {
            item.quantity += prod.quantity
          }
          return item
        })
      } else {
        arr.push(prod)
      }
    })
    this.cartArray = arr

  }

}
