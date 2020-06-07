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
  {
    path: 'section-spa-two',
    loadChildren: () =>
      import('./pages/section-spa-two/section-spa-two.module').then(
        (m) => m.SectionSpaTwoModule
      ),
  },
  {
    path: 'section-spa-one-github',
    loadChildren: () =>
      import(
        './pages/section-spa-one-github/section-spa-one-github.module'
      ).then((m) => m.SectionSpaOneGithubModule),
  },
  {
    path: 'section-with-routing',
    loadChildren: () =>
      import(
        './pages/section-spa-with-routing/section-spa-with-routing.module'
      ).then((m) => m.SectionSpaWithRoutingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
