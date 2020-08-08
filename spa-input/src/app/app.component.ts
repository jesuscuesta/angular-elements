import { Component, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'spa-one-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  @Input() nombre = 'test';

  @Output()
  propagar = new EventEmitter<string>();

  public activate() {
    console.log('Esta funcionando');
    this.propagar.emit('Este dato viajará hacia el padre');
  }
}
