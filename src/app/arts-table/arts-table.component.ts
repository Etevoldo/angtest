import { Component, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopmenuComponent } from '../topmenu/topmenu.component';
import { Arte } from '../arte';
import { ButtonService } from '../button.service';
import { ImagesService } from '../images.service';
import { ArtesService } from '../artes.service';


@Component({
  selector: 'app-arts-table',
  standalone: true,
  imports: [CommonModule, TopmenuComponent],
  templateUrl: './arts-table.component.html',
  styleUrl: './arts-table.component.css'
})
export class ArtsTableComponent {

  constructor(private ButtonService: ButtonService,
              private ImagesService: ImagesService,
              private ArtesService: ArtesService) {}


  artesList?: Arte[];

  getArtes(){
    this.ArtesService.getArtes()
        .subscribe(artes => this.artesList = artes)
  }

  isArteVisible(arteId: number): boolean {
    return this.ButtonService.isArteVisible(arteId || 0);
  }

  getImagePath(imageAlias: string): string {
    return this.ImagesService.getImagePath(imageAlias);
  }

  getcolSize(hasBranch: boolean): number {
      return hasBranch ? 5 : 2;
  }

  getBranchType(arte: Arte){
    if (arte.branch && arte.branch.nameSt)
      return this.getImagePath("technical");
    if (arte.techonly)
      return this.getImagePath("technical");
    if (arte.branch)
      return this.getImagePath("strike");
    else
      return "";
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

    ngOnInit(): void {
      this.getArtes();
    }
}
