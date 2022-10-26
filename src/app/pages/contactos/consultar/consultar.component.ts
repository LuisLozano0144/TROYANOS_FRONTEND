import { Component, OnInit } from '@angular/core';
import { ServicioContacto } from '../servicio-contactos.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.scss'],
})
export class ConsultarComponent implements OnInit {
  public contactos: any = [];
  constructor(private ServicioContacto: ServicioContacto) {}

  ngOnInit(): void {
    this.ServicioContacto.getContactos.subscribe((data) => {
      console.log(data);
      this.contactos = data;
    });
  }
}
