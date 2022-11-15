import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    //menu catalogo
    this.items = [
      {
        label: 'Catalogos',
        icon: 'pi pi pi-slack',
        items: [
          {
            label: 'Consultar',
            routerLink: '/catalogo/consultar',
            icon: 'pi pi-fw pi-search',
          },
        ],
      },
      //menu personas
      {
        label: 'Encargados',
        icon: 'pi pi-fw pi-users',
        items: [
          {
            label: 'Consultar',
            routerLink: '/personas/consultar',
            icon: 'pi pi-fw pi-search',
          },
        ],
      },
      //menu tipo contacto
      {
        label: 'Contactos',
        icon: 'pi pi-fw pi-phone',
        items: [
          {
            label: 'Consultar',
            routerLink: '/contactos/consultar',
            icon: 'pi pi-fw pi-search',
          },
        ],
      },
      //menu materiales
      {
        label: 'Materiales',
        icon: 'pi pi-fw pi-box',
        items: [
          {
            label: 'Consultar',
            routerLink: '/materiales/consultar',
            icon: 'pi pi-fw pi-search',
          },
        ],
      },
      //menu productos
      {
        label: 'Productos',
        icon: 'pi pi-fw pi-shopping-cart',
        items: [
          {
            label: 'Consultar',
            routerLink: '/productos/consultar',
            icon: 'pi pi-fw pi-search',
          },
        ],
      },
      //menu producción
      {
        label: 'Producción',
        icon: 'pi pi-fw pi-clock',
        items: [
          {
            label: 'Consultar',
            routerLink: '/produccion/consultar',
            icon: 'pi pi-fw pi-search',
          },
        ],
      },
      //menu tabla de paso
      {
        label: 'Materiales por Productos',
        icon: 'pi pi-fw pi-arrow-right-arrow-left',
        items: [
          {
            label: 'Consultar',
            routerLink: '/materiales-x-productos/consultar',
            icon: 'pi pi-fw pi-search',
          },
        ],
      },
      // //menu reportes
      // {
      //   label: 'Reportes',
      //   icon: 'pi pi-fw pi-chart-bar',
      //   routerLink: '/reportes',
      // },

      //menu reportes
      {
        label: 'Reportes',
        icon: 'pi pi-fw pi-chart-bar',
        // routerLink: '/reportes',
        items: [
          {
            label: 'Reporte Personas',
            routerLink: '/reportes',
            icon: 'pi pi-fw pi-search',
          },
          {
            label: 'Reporte Productos',
            routerLink: '/reporte/producto',
            icon: 'pi pi-fw pi-search',
          },
        ],
      },

      //volver al inicio
    ];
  }
}
