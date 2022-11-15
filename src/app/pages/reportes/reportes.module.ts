import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportesComponent } from './reportes/reportes.component';

import { ComponentsModule } from 'src/app/components/components.module';
import { PrimeNGModule } from 'src/app/prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReportesComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    PrimeNGModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ReportesModule {}
