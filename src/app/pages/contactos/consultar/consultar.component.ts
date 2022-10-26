import { Component, OnInit } from '@angular/core';
import { ServicioContacto } from '../servicio-contactos.service';

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

  constructor(private ServicioContacto: ServicioContacto) {}

  ngOnInit(): void {
    this.ServicioContacto.getContactos().subscribe();
    this.ServicioContacto.contactos$.subscribe(
      (data) => (this.contactos = data)
    );
  }
}
