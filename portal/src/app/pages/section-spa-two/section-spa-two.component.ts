import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portal-section-spa-two',
  templateUrl: './section-spa-two.component.html',
  styleUrls: ['./section-spa-two.component.scss']
})
export class SectionSpaTwoComponent implements OnInit {

  elementUrl = '../../../assets/spa-one/main-es2015';

  constructor() { }

  ngOnInit(): void {
  }

}
