import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'catalogo',
    loadChildren: () =>
      import('./pages/catalogo/catalogo.module').then((m) => m.CatalogoModule),
  },
  { path: '**', redirectTo: 'catalogo' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
