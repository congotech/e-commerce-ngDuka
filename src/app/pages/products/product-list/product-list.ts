// product-list.component.ts (Corrigé)
import { Component, inject, input, OnDestroy, OnInit } from '@angular/core';
import { Api } from '../../../core/services/api';
import { RouterLink } from "@angular/router";
import { ProductModel } from '../../../core/models/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList implements OnInit, OnDestroy {

  products?: ProductModel[];
  api = inject(Api);
  sectionTitle = input.required<string>();
  query = input.required<string>();
  queryLimitCount = input<number>();
  productsSub?: Subscription;


  ngOnInit(): void {
    // 💡 Correction : On affecte le résultat à la propriété 'this.products'
    this.productsSub = this.api.getProductsByCategory(this.query(), this.queryLimitCount()).subscribe((products) => {
      this.products = products; 
    }) 
  }

  ngOnDestroy(): void {
    this.productsSub?.unsubscribe();
  }
}