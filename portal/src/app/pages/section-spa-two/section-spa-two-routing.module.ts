import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SectionSpaTwoComponent } from './section-spa-two.component';

const routes: Routes = [{ path: '', component: SectionSpaTwoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionSpaTwoRoutingModule { }
