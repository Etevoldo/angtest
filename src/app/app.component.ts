import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArtsTableComponent } from './arts-table/arts-table.component';
import { HeaderComponent } from './header/header.component';
import { TopmenuComponent } from './topmenu/topmenu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
      RouterOutlet, 
      ArtsTableComponent,
      HeaderComponent,
      TopmenuComponent
    ],
  template: `
    <app-header></app-header>
    <div id="content">
      <app-topmenu></app-topmenu>
      <app-arts-table></app-arts-table>
    </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HyoutaSymphonia';

}
