import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonService } from '../button.service';

@Component({
  selector: 'app-topmenu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button type="button" (click)="toggle(0)" >Only Lloiyd</button>
    <button type="button" (click)="toggle(1)" >Only Collete</button>
  `,
  styleUrl: './topmenu.component.css'
})
export class TopmenuComponent {
  constructor(public ButtonService: ButtonService) {}

  toggle(userId: number) {
    this.ButtonService.toggle(userId);
  }

}
