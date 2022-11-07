import { Component, OnInit } from '@angular/core';
import { ServicioCatalogo } from '../servicio-catalogo.service';
import { GeneralService } from 'src/app/services/general.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.scss'],
})
export class ConsultarComponent implements OnInit {
  public catalogos: any = [];
  public id: string = '';

  buscarID() {
    this.servicioCatalogo.getCatalogo(this.id).subscribe();
    this.servicioCatalogo.catalogos$.subscribe(
      (data) => (this.catalogos = data)
    );
  }
  EditarID(id: string) {
    this.ruta.navigateByUrl(`/catalogo/modificar/${id}`);
  }
  Insertar(id: string) {
    this.ruta.navigateByUrl(`/catalogo/insertar`);
  }
  constructor(
    private servicioCatalogo: ServicioCatalogo,
    private generalService: GeneralService,
    private ruta: Router
  ) {}

  ngOnInit(): void {
    this.servicioCatalogo.getCatalogos().subscribe();
    this.servicioCatalogo.catalogos$.subscribe(
      (data) => (this.catalogos = data)
    );
    this.generalService.getCatalogos('identificacion').subscribe();
  }
}
