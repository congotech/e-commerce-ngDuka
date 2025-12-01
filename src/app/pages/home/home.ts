import { Component } from '@angular/core';
import { ProductList } from "../products/product-list/product-list";

@Component({
  selector: 'app-home',
  imports: [ProductList],
  template: `
    <section align="center" class="hero-section">
      <h2>Bienvenue sur ngDuka</h2>
      <h3>Une boutique en ligne pour le demo Http Client en Angular</h3> 
      <input placeholder="Rechercher dans ngSoko" type="text" />
    </section>

    <br />
    <app-product-list 
      sectionTitle="Electroniques"
      query="electronics"
      [queryLimitCount] = "4"
    />
    <br />
    <app-product-list 
      sectionTitle="Bijoux"
      query="jewelery"
      [queryLimitCount] = "4"
    />
    <br />
    <app-product-list 
      sectionTitle="Vetements pour hommes"
      query="men's clothing"
      [queryLimitCount] = "4"
    />
    <br />
    <app-product-list 
      sectionTitle="Vetements pour femmes"
      query="women's clothing"
      [queryLimitCount] = "4"
    />
    <br/><br/>
  `,
  styles: `
    .hero-section {
      background: linear-gradient(to right,rgb(233, 251, 249),rgb(216, 229, 255));
      padding: 2rem;  

      input {
        width: 50vw;
        padding: 0.5rem;
        font-size: 1rem;
      }
    }

  `,
})
export default class Home {

}
