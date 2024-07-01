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
    this.document.defaultView.localStorage.setItem('cart', JSON.stringify(this.cartArray));
  }

  public getCart(): void {
    this.cartArray = JSON.parse(this.document?.defaultView?.localStorage?.getItem('cart') || '[]');
  }

  public getCartLength(): void {
    const uniq = [...new Set(this.cartArray.map((prod) => prod.id))];
    this.cartLen.set(uniq.length);
  }

  public setCartTotal(): void {
    this.cartTotal.set(this.cartArray.reduce((acc, curr) => acc + curr.price, 0));
  }

  public addItemToCart(product: Product): void {
    this.cartArray.push(product);
    this.setCart();
    this.setCartTotal();
  }

  public removeItemFromCart(id: number): void {
    this.cartArray = this.cartArray.filter((prod) => prod.id !== id);
    this.setCart();
    this.setCartTotal();
  }

}
