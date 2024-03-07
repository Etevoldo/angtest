import { Component, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopmenuComponent } from '../topmenu/topmenu.component';
import { artes } from '../artes-list';
import { ButtonService } from '../button.service';


@Component({
  selector: 'app-arts-table',
  standalone: true,
  imports: [CommonModule, TopmenuComponent],
  template: `
    <Table>
      <tbody>
        <!--<app-art-entry *ngFor="let arte of artesList" [arte]="arte"> </app-art-entry> -->
        <ng-container *ngFor="let arte of artesList">
          <tr [id]="arte.id" style="text-align:left" *ngIf="isArteVisible(arte.id)">
            <td style="text-align: right;">
              <img [src]="getIconClass(arte.user)" alt="{{arte.user}} Icon" width="28" height="32">
              <img [src]="getIconClass(arte.type)" alt="{{arte.type}} Icon" width="32" height="32">
            </td>
            <td colspan="2">
              <span class="itemname">
                {{arte.nameEN}} / {{arte.namePT}} /
                <ruby style="font-size:85%">
                  [<rt></rt>{{arte.nameJP}}<rt>{{arte.furigana}}</rt>]
                </ruby>
                <br>
              </span>
              {{arte.desc}}
            </td>
            <td>
              <span *ngIf="arte.properties;" [innerHTML]="
                getContentWithoutIcon(arte.properties, arte.iconAliases!) ">
              </span><br>
              TP usage: {{arte.cost}}<br>
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
  constructor(public ButtonService: ButtonService) {}

  isArteVisible(arteId: number): boolean {
    return this.ButtonService.isArteVisible(arteId || 0);
  }

  getIconClass(iconAlias: string): string {
    const iconClassMap: { [key: string] : string } = {
      "lvl1": "./assets/artes-00.png",
      "lvl2": "./assets/artes-01.png",
      "slvl1": "./assets/artes-00-spell.png",
      "ROI" : "./assets/ROI.png",
      "COR": "./assets/COR.png",
      "GEN": "./assets/GEN.png",
      "fire": "./assets/icon-element-02.png"
    }
    return iconClassMap[iconAlias] || '';
  }
  getContentWithoutIcon(content: string, iconAliases: string[]): string {
    iconAliases.forEach((iconAlias) => {
        const iconSrc = this.getIconClass(iconAlias);
        if (iconSrc) {
          const iconTag = `<img src="${iconSrc}" width="15px" height="15px">`;
          content = content.replace(`%${iconAlias}`, iconTag);
        }
      });
      return content;
    }

  artesList = artes;

  
}