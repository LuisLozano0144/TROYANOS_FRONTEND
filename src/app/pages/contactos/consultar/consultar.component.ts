import { Component, OnInit } from '@angular/core';
import { ServicioContacto } from '../servicio-contactos.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.scss'],
})
export class ConsultarComponent implements OnInit {
  public contactos: any = [];
  public id: string = '';

  buscarID() {
    this.ServicioContacto.getContacto(this.id).subscribe();
    this.ServicioContacto.contactos$.subscribe(
      (data) => (this.contactos = data)
    );
  }
  EditarID(id: string) {
    this.ruta.navigateByUrl(`/contactos/modificar/${id}`);
  }
  Insertar(id: string) {
    this.ruta.navigateByUrl(`/contactos/insertar`);
  }
  constructor(
    private ServicioContacto: ServicioContacto,
    private ruta: Router
  ) {}

  ngOnInit(): void {
    this.ServicioContacto.getContactos().subscribe();
    this.ServicioContacto.contactos$.subscribe(
      (data) => (this.contactos = data)
    );
  }
}
