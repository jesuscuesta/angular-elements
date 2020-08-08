import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionSpaInputRoutingModule } from './section-spa-input-routing.module';
import { SectionSpaInputComponent } from './section-spa-input.component';

import '../../../assets/spa-input/main-es2015';
@NgModule({
  declarations: [SectionSpaInputComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    SectionSpaInputRoutingModule
  ]
})
export class SectionSpaInputModule { }
