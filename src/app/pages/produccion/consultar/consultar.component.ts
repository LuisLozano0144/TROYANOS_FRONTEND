import { Component, OnInit } from '@angular/core';
import { ServicioProduccion } from '../servicio-produccion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.scss'],
})
export class ConsultarComponent implements OnInit {
  public produccion: any = [];
  public id: string = '';

  buscarID() {
    this.ServicioProduccion.getProduccion(this.id).subscribe();
    this.ServicioProduccion.produccion$.subscribe(
      (data) => (this.produccion = data)
    );
  }
  EditarID(id: string) {
    this.ruta.navigateByUrl(`/produccion/modificar/${id}`);
  }
  Insertar(id: string) {
    this.ruta.navigateByUrl(`/produccion/insertar`);
  }
  constructor(
    private ServicioProduccion: ServicioProduccion,
    private ruta: Router
  ) {}

  ngOnInit(): void {
    this.ServicioProduccion.getProducciones().subscribe();
    this.ServicioProduccion.produccion$.subscribe(
      (data) => (this.produccion = data)
    );
  }
}
