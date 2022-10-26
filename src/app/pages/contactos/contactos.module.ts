import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultarComponent } from './consultar/consultar.component';
import { InsertarComponent } from './insertar/insertar.component';
import { ModificarComponent } from './modificar/modificar.component';
import { ContactoRoutingModule } from './contactos-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { PrimeNGModule } from 'src/app/prime-ng/prime-ng.module';

@NgModule({
  declarations: [ConsultarComponent, InsertarComponent, ModificarComponent],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    ComponentsModule,
    PrimeNGModule,
  ],
})
export class ContactosModule {}
