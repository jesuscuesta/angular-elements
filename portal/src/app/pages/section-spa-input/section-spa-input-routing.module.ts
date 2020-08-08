import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SectionSpaInputComponent } from './section-spa-input.component';

const routes: Routes = [{ path: '', component: SectionSpaInputComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionSpaInputRoutingModule { }
