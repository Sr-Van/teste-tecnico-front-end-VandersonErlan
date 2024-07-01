import { animate, style, transition, trigger } from '@angular/animations';
import { Component, effect, inject } from '@angular/core';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'c-driver',
  standalone: true,
  imports: [],
  templateUrl: './cart-drive.component.html',
  styleUrl: './cart-drive.component.css',
  animations: [
    trigger('enterAnim', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('300ms', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({transform: 'translateY(0)', opacity: 1}),
        animate('300ms', style({ transform: 'translateY(100%)', opacity: 0 }))
      ])

    ])
  ],
})
export class CartDriveComponent {

  public utS$ = inject(UtilService);

  public show: boolean = false;

  constructor() {
    effect(() => {
      this.show = this.utS$.showDriver();
    })
  }
}
