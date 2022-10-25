import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [CommonModule, MenubarModule, TableModule],
  exports: [MenubarModule, TableModule],
})
export class PrimeNGModule {}
