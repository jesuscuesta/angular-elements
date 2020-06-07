import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SectionSpaWithRoutingComponent } from './section-spa-with-routing.component';

const routes: Routes = [{ path: '', component: SectionSpaWithRoutingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionSpaWithRoutingRoutingModule { }
