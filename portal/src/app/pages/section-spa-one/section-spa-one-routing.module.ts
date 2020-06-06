import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SectionSpaOneComponent } from './section-spa-one.component';

const routes: Routes = [{ path: '', component: SectionSpaOneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionSpaOneRoutingModule { }
