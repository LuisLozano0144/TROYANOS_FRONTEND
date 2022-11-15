import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap, BehaviorSubject } from 'rxjs';
import { Reportes } from './reportes/informes.interface';

@Injectable({
  providedIn: 'root',
})
export class ServicioReporte {
  private _url: string = 'http://localhost:3000/reporte';

  constructor(private __http: HttpClient) {}

  getReportePersonas(
    fecha_ini: string | Date,
    fecha_fin: string | Date,
    id: string
  ) {
    return this.__http.get<Reportes[] | []>(
      `${this._url}/personas/${fecha_ini}/${fecha_fin}/${id}`
    );
  }

  getReporteProductos(
    fecha_ini: string | Date,
    fecha_fin: string | Date,
    id: string
  ) {
    return this.__http.get<Reportes[] | []>(
      `${this._url}/productos/${fecha_ini}/${fecha_fin}/${id}`
    );
  }
}
