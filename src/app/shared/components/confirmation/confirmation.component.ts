import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component } from '@angular/core';

//mensagens falsas para simular um log que seria exibido durante uma requisição de compra pro banco
const logMsgTemplate = {
  0: 'Iniciando processo de compra...',
  1: 'verificando disponibilidade do item',
  2: 'separando itens.',
  3: 'quase lá...'
};


@Component({
  selector: 'confirmation',
  standalone: true,
  imports: [],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css',
  animations: [
    trigger('popup', [
      transition(':enter', [
        style({ transform: 'scale(.5)', opacity: 0 }),
        animate('0.3s ease-out', style({ transform: 'scale(1.1)', opacity: 1 }))
      ]),
      transition('* => open', [
        style({ transform: 'scale(1.3)', opacity: 1 }),
        animate('0.2s ease-out', style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ])
  ]
})
export class ConfirmationComponent implements AfterViewInit {

  public logMsg: string = '';
  public confirmedBuy: boolean = false;

  public ngAfterViewInit(): void {
    this.changeLogMsg();
  }

  private changeLogMsg(): void {
    const arr = Object.keys(logMsgTemplate);
    for(const key of arr) {

      setTimeout(() => {
        this.logMsg = logMsgTemplate[Number(key)];
        
        if(Number(key) === arr.length - 1) {
          this.confirmedBuy = true;
        }      
      }, 1000 * Number(key));
    }
  }

}
