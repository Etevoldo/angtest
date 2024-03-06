import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonService } from '../button.service';

@Component({
  selector: 'app-topmenu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <input type="image" [src]="charaArray[0]" (click)="toggle(0)" >
    <input type="image" [src]="charaArray[1]" (click)="toggle(1)" >
    <input type="image" [src]="charaArray[2]" (click)="toggle(2)" >
  `,
  styleUrl: './topmenu.component.css'
})
export class TopmenuComponent {
  constructor(public ButtonService: ButtonService) {}

    charaArray: Array<string> = [
      "./assets/ROI.png",
      "./assets/COR.png",
      "./assets/GEN.png",
    ]

  toggle(userId: number) {
    this.ButtonService.toggle(userId);
  }

}
