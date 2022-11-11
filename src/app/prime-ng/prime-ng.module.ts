import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    TableModule,
    DropdownModule,
    InputTextModule,
    ConfirmDialogModule,
    ToastModule,
  ],
  exports: [
    MenubarModule,
    TableModule,
    DropdownModule,
    InputTextModule,
    ConfirmDialogModule,
    ToastModule,
  ],
})
export class PrimeNGModule {}
