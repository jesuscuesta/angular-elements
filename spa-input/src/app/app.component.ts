import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'spa-one-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  @Input() nombre = 'test';
}
