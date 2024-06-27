import { Component, inject } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';

import { RouterOutlet, RouterModule } from '@angular/router';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { UtilService } from './shared/services/util.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HeaderComponent,
    LoadingComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'teste-tecnico-front-end-vanderson';

  public utS$ = inject(UtilService)

  constructor() {
    this.utS$.runLoading();
  }

}
