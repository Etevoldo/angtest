import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topmenu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button type="button" id="hide" (click)="hidestuff()" >Hide 2-3</button>
  `,
  styleUrl: './topmenu.component.css'
})
export class TopmenuComponent {
    hideArts = false;


  hidestuff()
  {
    {
      this.hideArts = !this.hideArts;  
    }
  }
}
