import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer>
      <div class="footer-container max-width">
        <div class="left-container">
          <div>
            <p><b>PRODUITS</b></p>
            <a routerLink="/products/electronics">Electroniques</a>
            <a routerLink="/products/jewelery">Bijoux</a>
            <a routerLink="/products/men's clothing">Vetements pour hommes</a>
            <a routerLink="/products/women's clothing">Vetements pour femmes</a>
          </div>
          <div>
            <p><b>LIENS</b></p>
            <a href="https;//youtu.be/hiTGJtfPIdY" targrt="blank">Tutoriel YOUTUBE</a>
            <a href="https;//github.com/DrcMind-Youtube/ngDuka" targrt="blank">Code Github</a>
            <a href="https;//drcmind-malakissi.teachable.com" targrt="blank">Malakissi</a>
        </div>
        </div>

        <p>
          <b>ngDuka @ {{ date.getFullYear() }}<br /> </b>
          Développé par Amani Bisima, propulsé par Malakisi
        </p>
      </div>
      
    </footer>
  `,
  styles: `
    footer{
      background:rgb(230, 242, 246);
    }

    .footer-container {
      display: flex;
      justify-content: space-between;
      align-items: end;
      padding: 2rem;
      flex-wrap: wrap;
    }

    .left-container {
      display: flex;
      flex-wrap: wrap;
      gap: 3rem;

      a {
        display: block;
        margin: 0.5rem 0;
      }
    }

  `,
})
export class Footer {
  date = new Date();
}
