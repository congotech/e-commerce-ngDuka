import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toolbar } from "./pages/shared/toolbar";
import { Footer } from "./pages/shared/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toolbar, Footer],
  template: `
    <app-toolbar />
    <router-outlet />
    <app-footer />
  `,
  styles: [],
})
export class App {
  
}
