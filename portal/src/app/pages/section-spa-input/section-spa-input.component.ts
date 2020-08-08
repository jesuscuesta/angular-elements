import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portal-section-spa-input',
  templateUrl: './section-spa-input.component.html',
  styleUrls: ['./section-spa-input.component.scss']
})
export class SectionSpaInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  procesaPropagar(evento) {
    console.log('Valor pasado del webcomponent: ' + evento.detail);
  }

}
