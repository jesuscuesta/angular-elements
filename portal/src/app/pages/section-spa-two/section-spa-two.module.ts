import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionSpaTwoRoutingModule } from './section-spa-two-routing.module';
import { SectionSpaTwoComponent } from './section-spa-two.component';
import { LazyElementsModule } from '@angular-extensions/elements';

@NgModule({
  declarations: [SectionSpaTwoComponent],
  imports: [
    CommonModule,
    SectionSpaTwoRoutingModule,
    LazyElementsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SectionSpaTwoModule { }
