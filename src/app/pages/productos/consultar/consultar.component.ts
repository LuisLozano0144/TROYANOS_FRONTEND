import { Component, OnInit } from '@angular/core';
import { ServicioProductos } from '../servicio-productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.scss'],
})
export class ConsultarComponent implements OnInit {
  public id: string = '';
  public productos: any = [];

  buscarID() {
    this.servicioProductos.getProducto(this.id).subscribe();
    this.servicioProductos.productos$.subscribe(
      (data) => (this.productos = data)
    );
  }
  EditarID(id: string) {
    this.ruta.navigateByUrl(`/productos/modificar/${id}`);
  }
  Insertar(id: string) {
    this.ruta.navigateByUrl(`/productos/insertar`);
  }

  constructor(
    private servicioProductos: ServicioProductos,
    private ruta: Router
  ) {}

  ngOnInit(): void {
    this.servicioProductos.getProductos().subscribe();
    this.servicioProductos.productos$.subscribe(
      (data) => (this.productos = data)
    );
  }
}
