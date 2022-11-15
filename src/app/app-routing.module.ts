import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportesComponent } from './pages/reportes/reportes/reportes.component';
//entutadores para navegador
const routes: Routes = [
  {
    path: 'catalogo',
    loadChildren: () =>
      import('./pages/catalogo/catalogo.module').then((m) => m.CatalogoModule),
  },
  {
    path: 'contactos',
    loadChildren: () =>
      import('./pages/contactos/contactos.module').then(
        (m) => m.ContactosModule
      ),
  },
  {
    path: 'personas',
    loadChildren: () =>
      import('./pages/personas/personas.module').then((m) => m.PersonasModule),
  },
  {
    path: 'materiales',
    loadChildren: () =>
      import('./pages/materiales/materiales.module').then(
        (m) => m.MaterialesModule
      ),
  },
  {
    path: 'productos',
    loadChildren: () =>
      import('./pages/productos/productos.module').then(
        (m) => m.ProductosModule
      ),
  },
  {
    path: 'produccion',
    loadChildren: () =>
      import('./pages/produccion/produccion.module').then(
        (m) => m.ProduccionModule
      ),
  },
  {
    path: 'materiales-x-productos',
    loadChildren: () =>
      import(
        './pages/materiales-x-productos/materiales-x-productos.module'
      ).then((m) => m.MaterialesXProductosModule),
  },
  {
    path: 'reportes',
    component: ReportesComponent,
  },
  { path: '**', redirectTo: 'catalogo' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
