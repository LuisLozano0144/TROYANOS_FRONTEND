import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Produccion } from './produccion-interfaces';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class ServicioProduccion {
  private Url: string = 'http//localhost:3000';
  private produccion: BehaviorSubject<Produccion[] | null> =
    new BehaviorSubject(null) as BehaviorSubject<Produccion[] | null>;
  get produccion$(): Observable<Produccion[]> {
    return this.produccion.asObservable() as Observable<Produccion[]>;
  }

  constructor(private _http: HttpClient) {}

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // SERVICIO CRUD PRODUCCIONES
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  // Método consultar producciones
  getProducciones() {
    return this._http
      .get('http://localhost:3000/tipProduccion', httpOptions)
      .pipe(
        tap((data) => {
          this.produccion.next(data as any);
        })
      );
  }
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // SERVICIO BUSCAR POR ID PRODUCCION
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  // Método consultar por id
  getProduccion(id: string | number) {
    return this._http
      .get(`http://localhost:3000/tipProduccion/${id}`, httpOptions)
      .pipe(
        tap((data) => {
          this.produccion.next(data as any);
        })
      );
  }
}
