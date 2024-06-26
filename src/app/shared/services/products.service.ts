import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private http$ = inject(HttpClient)

  constructor() { }

  //pegando os dados da api (nesse caso JSON local) e tipando para manter os dados 
  getProducts(): Observable<Product[]> {
    return this.http$.get<Product[]>('./../../../assets/files/products.json')
  }
}
