import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultarComponent } from './consultar/consultar.component';
import { ModificarComponent } from './modificar/modificar.component';
import { PersonasRoutingModule } from './personas-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { PrimeNGModule } from 'src/app/prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InsertarComponent } from './insertar/insertar.component';
import { GeneralService } from 'src/app/services/general.service';
@NgModule({
  declarations: [ConsultarComponent, ModificarComponent, InsertarComponent],
  imports: [
    CommonModule,
    PersonasRoutingModule,
    PrimeNGModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [GeneralService],
})
export class PersonasModule {}
