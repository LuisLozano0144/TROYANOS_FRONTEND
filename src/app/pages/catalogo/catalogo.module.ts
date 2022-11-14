import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultarComponent } from './consultar/consultar.component';
import { CatalogoRoutingModule } from './catalogo-routing.module';
import { InsertarComponent } from './insertar/insertar.component';
import { ModificarComponent } from './modificar/modificar.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { PrimeNGModule } from 'src/app/prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeneralService } from 'src/app/services/general.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [ConsultarComponent, InsertarComponent, ModificarComponent],
  imports: [
    CommonModule,
    CatalogoRoutingModule,
    ComponentsModule,
    PrimeNGModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [GeneralService, ConfirmationService, MessageService],
})
export class CatalogoModule {}
