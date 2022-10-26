import { Component, OnInit } from '@angular/core';
import { ServicioCatalogo } from '../servicio-catalogo.service';

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
  constructor(private servicioCatalogo: ServicioCatalogo) {}

  ngOnInit(): void {
    this.servicioCatalogo.getCatalogos().subscribe();
    this.servicioCatalogo.catalogos$.subscribe(
      (data) => (this.catalogos = data)
    );
  }
}
