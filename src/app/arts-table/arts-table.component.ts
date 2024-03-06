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
          <tr [id]="arte.id" style="text-align:left" *ngIf="isArteVisible">
            <td style="text-align: right;">
              <img [src]="arte.user" alt="{{arte.user}} Icon" width="28" height="32">
              <img [src]="arte.type" alt="{{arte.type}} Icon" width="32" height="32">
            </td>
            <td colspan="2">
              <span class="itemname">
                {{arte.nameEN}} / {{arte.namePT}} /
                <ruby style="font-size:85%">
                  [<rt></rt>{{arte.nameJP}}<rt>{{arte.furigana}}</rt>]
                </ruby>''
                <br>
              </span>
              {{arte.desc}}
            </td>
            <td> TP usage: {{arte.cost}}<br>
              <span *ngIf="arte.iconAliases; else elseBlock" [innerHTML]="
                getContentWithoutIcon(arte.learnDesc, arte.iconAliases!) ">
              </span>
              <ng-template #elseBlock>{{arte.learnDesc}}</ng-template>
            </td>
          </tr>
          <tr>
            <td colspan="4"><hr>
          </tr>
        </ng-container>
      </tbody>
    </Table>
  `,
  styleUrl: './arts-table.component.css'
})
export class ArtsTableComponent {
  @Input() arteId: number | undefined;

  constructor(public ButtonService: ButtonService) {}

  get isArteVisible(): boolean {
    return this.ButtonService.isArteVisible(this.arteId || 0);
  }

  getIconClass(iconAlias: string): string {
    const iconClassMap: { [key: string] : string } = {
      "arte00ico": "./assets/artes-00.png",
      "ROI"      : "./assets/ROI.png"
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
