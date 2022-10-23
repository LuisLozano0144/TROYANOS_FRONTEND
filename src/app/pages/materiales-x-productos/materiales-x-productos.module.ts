import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultarComponent } from './consultar/consultar.component';
import { InsertarComponent } from './insertar/insertar.component';
import { ListarComponent } from './listar/listar.component';
import { ModificarComponent } from './modificar/modificar.component';



@NgModule({
  declarations: [
    ConsultarComponent,
    InsertarComponent,
    ListarComponent,
    ModificarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MaterialesXProductosModule { }
