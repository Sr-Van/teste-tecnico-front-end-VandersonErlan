import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  private route = inject(Router);
  public cart$ = inject(CartService);

  goToRoute(route: string) {
    this.route.navigate([route]);
  }
}
