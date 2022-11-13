import { Component, OnInit } from '@angular/core';
import { ServicioMaterialesXproductos } from '../servicio-materiales-xproductos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.scss'],
})
export class ConsultarComponent implements OnInit {
  public materialesXproduccion: any = [];
  public id: string = '';

  buscarID() {
    this.ServicioMaterialesXproductos.getMaterial(this.id).subscribe();
    this.ServicioMaterialesXproductos.materialesXproduccion$.subscribe(
      (data) => (this.materialesXproduccion = data)
    );
  }

  EditarID(id: string) {
    this.ruta.navigateByUrl(`/materiales-x-productos/modificar/${id}`);
  }
  Insertar(id: string) {
    this.ruta.navigateByUrl(`/materiales-x-productos/insertar`);
  }

  constructor(
    private ServicioMaterialesXproductos: ServicioMaterialesXproductos,
    private ruta: Router
  ) {}

  ngOnInit(): void {
    this.ServicioMaterialesXproductos.getmaterialesXproduccion().subscribe();
    this.ServicioMaterialesXproductos.materialesXproduccion$.subscribe(
      (data) => (this.materialesXproduccion = data)
    );
  }
}
