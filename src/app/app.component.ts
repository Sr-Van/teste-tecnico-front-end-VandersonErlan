import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';

import { RouterOutlet, RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'teste-tecnico-front-end-vanderson';
}
