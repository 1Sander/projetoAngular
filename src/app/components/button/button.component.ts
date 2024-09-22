import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input() text: string = ''; //input para o texto do botão
  @Input() color: string = ''; //input para a cor do botão
  @Output() btnClick = new EventEmitter(); //emissor do evento de click

  onClick()
  {
    this.btnClick.emit(); // emite o evento de click
  }

}
