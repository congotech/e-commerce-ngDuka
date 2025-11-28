import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  template: `
    <section align="center" class="hero-section">
      <h2>Bienvenue sur ngDuka</h2>
      <h3>Une boutique en ligne pour le demo Http Client en Angular</h3>
      <input placeholder="Rechercher dans ngSoko" type="text" />
    </section>
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
