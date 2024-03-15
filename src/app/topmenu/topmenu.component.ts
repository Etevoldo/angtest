import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesService } from '../images.service';
import { ButtonService } from '../button.service';

@Component({
  selector: 'app-topmenu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <input type="image" [src]="getImagePath('ROI')" (click)="toggle(0)"
      title="Show Lloyd only" >
    <input type="image" [src]="getImagePath('COR')" (click)="toggle(1)"
      title="Show Collete Only" >
    <input type="image" [src]="getImagePath('GEN')" (click)="toggle(2)"
      title="Show Genis Only" >
    <input type="image" [src]="getImagePath('REF')" (click)="toggle(2)"
      title="Show Reine Only" >
    <input type="image" [src]="getImagePath('KRA')" (click)="toggle(2)"
      title="Show Krato Only" >
    <input type="image" [src]="getImagePath('SHI')" (click)="toggle(2)"
      title="Show Sheena Only" >
    <input type="image" [src]="getImagePath('ZER')" (click)="toggle(2)"
      title="Show Zelos Only" >
    <input type="image" [src]="getImagePath('PRE')" (click)="toggle(2)"
      title="Show Presea Only" >
    <input type="image" [src]="getImagePath('REG')" (click)="toggle(2)"
      title="Show Regal Only" >
    <input type="image" [src]="getImagePath('fire')" (click)="showall()" 
      title="Show All" >
  `,
  styleUrl: './topmenu.component.css'
})
export class TopmenuComponent {
  constructor(private ButtonService: ButtonService,
              private ImagesService: ImagesService) {}

  getImagePath(imageAlias: string): string {
    return this.ImagesService.getImagePath(imageAlias);
  }

  toggle(userId: number) {
    this.ButtonService.toggle(userId);
  }

  showall() {
    this.ButtonService.showall();
  }

}
