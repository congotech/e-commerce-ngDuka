import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class Api {
  API = 'https://fakestoreapi.com';
  http = inject(HttpClient);

  getProductsByCategory(category: string, limitCount?: number) {
    const queryParams = limitCount ? `?limit=${limitCount}`:'';
    return this.http.get<ProductModel[]>(`${this.API}/products/category/${category}${queryParams}`);
  }  
}
