import { Component, OnInit } from '@angular/core';
import { ServicioMateriale } from '../servicio-materiales.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.scss'],
})
export class ConsultarComponent implements OnInit {
  public materiales: any = [];
  public id: string = '';

  buscarID() {
    this.ServicioMateriale.getMaterial(this.id).subscribe();
    this.ServicioMateriale.materiales$.subscribe(
      (data) => (this.materiales = data)
    );
  }
  EditarID(id: string) {
    this.ruta.navigateByUrl(`/materiales/modificar/${id}`);
  }
  Insertar(id: string) {
    this.ruta.navigateByUrl(`/materiales/insertar`);
  }
  constructor(
    private ServicioMateriale: ServicioMateriale,
    private ruta: Router
  ) {}

  ngOnInit(): void {
    this.ServicioMateriale.getMateriales().subscribe();
    this.ServicioMateriale.materiales$.subscribe(
      (data) => (this.materiales = data)
    );
  }
}
