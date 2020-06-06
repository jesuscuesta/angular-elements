import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionSpaOneGithubRoutingModule } from './section-spa-one-github-routing.module';
import { SectionSpaOneGithubComponent } from './section-spa-one-github.component';

import "deploy-angular-element/main-es2015";

@NgModule({
  declarations: [SectionSpaOneGithubComponent],
  imports: [
    CommonModule,
    SectionSpaOneGithubRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SectionSpaOneGithubModule { }
