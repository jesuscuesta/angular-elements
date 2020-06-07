import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionSpaWithRoutingRoutingModule } from './section-spa-with-routing-routing.module';
import { SectionSpaWithRoutingComponent } from './section-spa-with-routing.component';

import '../../../assets/spa-with-routing/main-es2015';
@NgModule({
  declarations: [SectionSpaWithRoutingComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    SectionSpaWithRoutingRoutingModule
  ]
})
export class SectionSpaWithRoutingModule { }
