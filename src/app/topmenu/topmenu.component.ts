import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonService } from '../button.service';

@Component({
  selector: 'app-topmenu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button type="button" id="hide" (click)="toggle(1)" >Hide1</button>
    <button type="button" id="hide" (click)="toggle(2)" >Hide1</button>
  `,
  styleUrl: './topmenu.component.css'
})
export class TopmenuComponent {
  constructor(public ButtonService: ButtonService) {}

  toggle(itemId: number) {
    this.ButtonService.toggle(itemId);
  }

}
