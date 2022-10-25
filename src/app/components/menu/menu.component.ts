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
          {
            label: 'Insertar',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/catalogo/insertar',
          },
          {
            label: 'Modificar',
            routerLink: '/catalogo/modificar',
            icon: 'pi pi-fw pi-file-edit',
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
          {
            label: 'Insertar',
            icon: 'pi pi-fw pi-user-plus',
            routerLink: '/personas/insertar',
          },
          {
            label: 'Modificar',
            routerLink: '/personas/modificar',
            icon: 'pi pi-fw pi-user-edit',
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
          {
            label: 'Insertar',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/contactos/insertar',
          },
          {
            label: 'Modificar',
            routerLink: '/contactos/modificar',
            icon: 'pi pi-fw pi-file-edit',
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
          {
            label: 'Insertar',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/materiales/insertar',
          },
          {
            label: 'Modificar',
            routerLink: '/materiales/modificar',
            icon: 'pi pi-fw pi-file-edit',
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
          {
            label: 'Insertar',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/productos/insertar',
          },
          {
            label: 'Modificar',
            routerLink: '/productos/modificar',
            icon: 'pi pi-fw pi-file-edit',
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
          {
            label: 'Insertar',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/produccion/insertar',
          },
          {
            label: 'Modificar',
            routerLink: '/produccion/modificar',
            icon: 'pi pi-fw pi-file-edit',
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
          {
            label: 'Insertar',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/materiales-x-productos/insertar',
          },
          {
            label: 'Modificar',
            routerLink: '/materiales-x-productos/modificar',
            icon: 'pi pi-fw pi-file-edit',
          },
        ],
      },
      //menu reportes
      {
        label: 'Reportes',
        icon: 'pi pi-fw pi-chart-bar',
        routerLink: '/reportes',
      },
    ];
    //volver al inicio
  }
}
