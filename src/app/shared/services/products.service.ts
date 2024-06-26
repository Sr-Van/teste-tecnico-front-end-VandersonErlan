import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

type Product = {
  id: number
  product: string
  price: number
  brand: string
  quantity: number
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private http$ = inject(HttpClient)

  constructor() { }

  //pegando os dados da api (nesse caso JSON local) e tipando para manter os dados corretos
  getProducts(): Observable<Product[]> {
    return this.http$.get<Product[]>('./../../../assets/files/products.json')
  }
}
