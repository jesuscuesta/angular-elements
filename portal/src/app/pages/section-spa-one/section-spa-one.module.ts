import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionSpaOneRoutingModule } from './section-spa-one-routing.module';
import { SectionSpaOneComponent } from './section-spa-one.component';

import '../../../assets/spa-one/main-es2015';

@NgModule({
  declarations: [SectionSpaOneComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, SectionSpaOneRoutingModule],
})
export class SectionSpaOneModule {}
