import { Component } from '@angular/core';

@Component({
  selector: 'confirmation',
  standalone: true,
  imports: [],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {

  public logMsg: string = 'Iniciando processo de compra...';
  public confirmedBuy: boolean = false;

}
