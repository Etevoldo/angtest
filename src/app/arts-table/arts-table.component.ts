import { Component, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopmenuComponent } from '../topmenu/topmenu.component';
import { artes } from '../artes-list';
import { ButtonService } from '../button.service';
import { ImagesService } from '../images.service';


@Component({
  selector: 'app-arts-table',
  standalone: true,
  imports: [CommonModule, TopmenuComponent],
  templateUrl: './arts-table.component.html',
  styleUrl: './arts-table.component.css'
})
export class ArtsTableComponent {
  constructor(private ButtonService: ButtonService,
              private ImagesService: ImagesService) {}

  isArteVisible(arteId: number): boolean {
    return this.ButtonService.isArteVisible(arteId || 0);
  }

  getImagePath(imageAlias: string): string {
    return this.ImagesService.getImagePath(imageAlias);
  }

  getcolSize(hasBranch: boolean): number {
      return hasBranch ? 4 : 2;
  }

  getProps(props: string[]): string {
    var content = "";
    props.forEach((iconAlias) => {
        const iconSrc = this.getImagePath(iconAlias);
        if (iconSrc) {
          const iconTag = `<img src="${iconSrc}" width="20px" height="20px">`;
          content += iconTag;
        }
      });
      return content;
  }

  getContentWithoutIcon(content: string, iconAliases: string[]): string {
    iconAliases.forEach((iconAlias) => {
        const iconSrc = this.getImagePath(iconAlias);
        if (iconSrc) {
          const iconTag = `<img src="${iconSrc}" width="20px" height="20px">`;
          content = content.replace(`%${iconAlias}`, iconTag);
        }
      });
      return content;
    }

  artesList = artes;

  
}
