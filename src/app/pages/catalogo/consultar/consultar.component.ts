import { Component, OnInit } from '@angular/core';
import { ServicioCatalogo } from '../servicio-catalogo.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.scss'],
})
export class ConsultarComponent implements OnInit {
  public catalogos: any = [];
  constructor(private servicioCatalogo: ServicioCatalogo) {}

  ngOnInit(): void {
    this.servicioCatalogo.getCatalogos.subscribe((data) => {
      console.log(data);
      this.catalogos = data;
    });
  }
}
