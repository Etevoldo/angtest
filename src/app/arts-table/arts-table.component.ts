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
  template: `
    <Table>
      <tbody>
        <ng-container *ngFor="let arte of artesList">
          <tr *ngIf="isArteVisible(arte.id)" 
              [id]="arte.id" 
              style="text-align:left">
            <td style="text-align: right;">
              <img [src]="getImagePath(arte.user)" alt="{{arte.user}} 
                Icon" width="28" height="32">
              <img [src]="getImagePath(arte.type)" alt="{{arte.type}} Icon" 
                width="32" height="32">
            </td>
            <td colspan="2">
              <span class="itemname" *ngIf="arte.namePT; else noPTJP">
                {{arte.nameEN}} / {{arte.namePT}} /
                <ruby style="font-size:85%">
                  [<rt></rt>{{arte.nameJP}}<rt>{{arte.furigana}}</rt>]
                </ruby><br>
                {{arte.desc}}
              </span>
              <ng-template #noPTJP class="itemname">
                <span>
                  {{arte.nameEN}}
                  <ruby style="font-size:85%">
                  </ruby><br>
                </span>
                {{arte.desc}}
              </ng-template>
            </td>
            <td>
              <div *ngIf="arte.properties;">
                <span [innerHTML]="
                  getContentWithoutIcon(arte.properties, arte.iconAliases!)">
                </span>
                <br>
              </div>
              <span class="highlight">TP:</span>
                 {{arte.cost}}<br>
              <span *ngIf="arte.iconAliases; else elseBlock" [innerHTML]="
                getContentWithoutIcon(arte.learnDesc, arte.iconAliases) ">
              </span>
              <ng-template #elseBlock>{{arte.learnDesc}}</ng-template>
            </td>
          </tr>
          <tr *ngIf="isArteVisible(arte.id)">
            <td colspan="4"><hr>
          </tr>
        </ng-container>
      </tbody>
    </Table>
  `,
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
