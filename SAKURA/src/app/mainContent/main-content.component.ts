import { Component } from '@angular/core';
import { LandingPageComponent } from './landingPage/landing-page.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LandingPageComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
