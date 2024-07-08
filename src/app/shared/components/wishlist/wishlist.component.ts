import { Component, inject } from '@angular/core';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'wishlist',
  standalone: true,
  imports: [],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {

  public utS$ = inject(UtilService);

}
