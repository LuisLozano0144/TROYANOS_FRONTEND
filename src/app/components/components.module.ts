import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [LayoutComponent, MenuComponent],
  imports: [CommonModule, PrimeNGModule],
  exports: [LayoutComponent, MenuComponent],
})
export class ComponentsModule {}
