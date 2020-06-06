import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SectionSpaOneGithubComponent } from './section-spa-one-github.component';

const routes: Routes = [{ path: '', component: SectionSpaOneGithubComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionSpaOneGithubRoutingModule { }
