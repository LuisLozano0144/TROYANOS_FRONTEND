import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultarComponent } from './consultar/consultar.component';
import { ListarComponent } from './listar/listar.component';
import { CatalogoRoutingModule } from './catalogo-routing.module';
import { InsertarComponent } from './insertar/insertar.component';
import { ModificarComponent } from './modificar/modificar.component';
import { ComponentsModule } from 'src/app/components/components.module';
@NgModule({
  declarations: [
    ConsultarComponent,
    ListarComponent,
    InsertarComponent,
    ModificarComponent,
  ],
  imports: [CommonModule, CatalogoRoutingModule, ComponentsModule],
})
export class CatalogoModule {}
