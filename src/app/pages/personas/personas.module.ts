import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultarComponent } from './consultar/consultar.component';
import { InsertarComponent } from './insertar/insertar.component';
import { ModificarComponent } from './modificar/modificar.component';
import { PersonasRoutingModule } from './personas-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { PrimeNGModule } from 'src/app/prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ConsultarComponent, InsertarComponent, ModificarComponent],
  imports: [
    CommonModule,
    PersonasRoutingModule,
    PrimeNGModule,
    ComponentsModule,
    FormsModule,
  ],
})
export class PersonasModule {}
