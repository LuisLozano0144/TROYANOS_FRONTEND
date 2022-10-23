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
        items: [
          {
            label: 'Listar',
            routerLink: '/catalogo/listar',
          },
          { label: 'Consultar ID', routerLink: '/catalogo/consultar' },
          {
            label: 'Insertar',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/catalogo/insertar',
          },
          { label: 'Modificar', routerLink: '/catalogo/modificar' },
        ],
      },
      //menu personas
      {
        label: 'Encargados',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Listar',
            routerLink: '/personas/listar',
          },
          { label: 'Consultar ID', routerLink: '/personas/consultar' },
          {
            label: 'Insertar',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/personas/insertar',
          },
          { label: 'Modificar', routerLink: '/personas/modificar' },
        ],
      },
      //menu tipo contacto
      {
        label: 'Contactos',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Listar',
            routerLink: '/contactos/listar',
          },
          { label: 'Consultar ID', routerLink: '/contactos/consultar' },
          {
            label: 'Insertar',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/contactos/insertar',
          },
          { label: 'Modificar', routerLink: '/contactos/modificar' },
        ],
      },
    ];
  }
}
