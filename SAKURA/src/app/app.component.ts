import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent} from './mainContent/main-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SAKURA';
}
