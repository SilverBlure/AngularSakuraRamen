import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HowToOrderComponent } from './how-to-order/how-to-order.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [NavbarComponent, HowToOrderComponent],
  template: `
  <div class="backgroundImage">
  <div class="navbar">
  <app-navbar></app-navbar></div>
  <h1>SAKURA RAMEN</h1>
  <h2>BEST RAMEN IN TOWN</h2></div>
  <app-how-to-order></app-how-to-order>

  `,
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
