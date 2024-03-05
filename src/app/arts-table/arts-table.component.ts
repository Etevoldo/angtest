import { Component, Input } from '@angular/core';
import { ArtEntryComponent } from '../art-entry/art-entry.component';
import { CommonModule } from '@angular/common';
import { Arte } from '../arte';
import { TopmenuComponent } from '../topmenu/topmenu.component';


@Component({
  selector: 'app-arts-table',
  standalone: true,
  imports: [CommonModule, ArtEntryComponent, TopmenuComponent],
  template: `
    <Table>
      <tbody>
        <!--<app-art-entry *ngFor="let arte of artesList" [arte]="arte"> </app-art-entry> -->
        <ng-container *ngFor="let arte of artesList" >
          <tr [id]="arte.id" style="text-align:left">
            <td style="text-align: right;">
              <img [src]="arte.user" alt="{{arte.user}} Icon" width="28" height="32">
              <img [src]="arte.type" alt="{{arte.type}} Icon" width="32" height="32">
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

  getIconClass(iconAlias: string): string {
    const iconClassMap: { [key: string] : string } = {
      "arte00ico": "/assets/artes-00.png",
      "ROI"      : "/assets/ROI.png"
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

  artesList: Arte[] = [
    {
      "id": 1,
      "nameEN": "Demon Fang",
      "namePT": "Lâmina Demônio",
      "nameJP": "魔人剣",
      "furigana": "マジンケン",
      "user": "/assets/ROI.png",
      "type": "/assets/artes-00.png",
      "cost": 4,
      "desc": "Hits twice up close, forcing downed enemies to stand up.",
      "learnDesc": "Default, %arte00ico needed, also %ROI too", 
      "iconAliases": ["arte00ico", "ROI"]
    },
    {
      "id": 2,
      "nameEN": "Sonic Thrust",
      "namePT": "Impoulso Sônico",
      "nameJP": "瞬迅剣",
      "furigana": "シュンジンケン",
      "user": "/assets/ROI.png",
      "type": "/assets/artes-00.png",
      "cost": 5,
      "desc": "no desc",
      "learnDesc": "Level 4"
    },
    {
      "id": 3,
      "nameEN": "sdhfdsklj",
      "namePT": "sdkfjhdsfkdsj em ingles",
      "nameJP": "askjhfdkjhds em japones",
      "furigana": "furigana",
      "user": "/assets/ROI.png",
      "type": "/assets/artes-00.png",
      "cost": 9999,
      "desc": "levanta.......",
      "learnDesc": "Demon Fang Technical Branch"
    }
  ];
}
