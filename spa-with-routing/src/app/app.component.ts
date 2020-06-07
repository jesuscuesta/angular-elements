import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'spa-with-routing-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'spa with routing';
}
