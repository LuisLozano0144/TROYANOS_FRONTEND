import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultarComponent } from './consultar/consultar.component';
import { InsertarComponent } from './insertar/insertar.component';
import { ModificarComponent } from './modificar/modificar.component';
import { MaterialexXProductosRoutingModule } from './materialesXproductos-routing.module';
@NgModule({
  declarations: [ConsultarComponent, InsertarComponent, ModificarComponent],
  imports: [CommonModule, MaterialexXProductosRoutingModule],
})
export class MaterialesXProductosModule {}