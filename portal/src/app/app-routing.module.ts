import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'section-spa-one',
    loadChildren: () =>
      import('./pages/section-spa-one/section-spa-one.module').then(
        (m) => m.SectionSpaOneModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
