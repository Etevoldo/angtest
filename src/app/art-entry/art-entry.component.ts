import { Component, Input } from '@angular/core';
import { Arte } from '../arte';

@Component({
  selector: 'app-art-entry',
  standalone: true,
  imports: [],
  template: `
    <tr id="arte17" style="text-align:left">
      <td style="text-align: right;">
        <img [src]="arte.user" alt="{{arte.user}} Icon" width="28" height="32">
        <img [src]="arte.type" alt="{{arte.type}} Icon" width="28" height="32">
      </td>
      <td colspan="2">
        <span class="itemname">
          {{arte.nameEN}} / {{arte.namePT}} /
          <ruby style="font-size:85%">[<rt></rt>{{arte.nameJP}}<rt>{{arte.furigana}}</rt>]</ruby>
          <br>
        </span>
        {{arte.desc}}
      </td>
      <td>TP usage: {{arte.cost}}<br>{{arte.learnDesc}}
      </td>
    </tr>
    <tr>
      <td colspan="4"><hr>
    </tr>
  `,
  styleUrl: './art-entry.component.css'
})
export class ArtEntryComponent {
  @Input() arte!:Arte;
}
