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
  // Método para INSERTAR una prpducción
  postProducción({
    Fecha_Produccion,
    Id_Empleado_Produccion,
    Id_Producto_Produccion,
    num_totalProduccion,
    num_Defectuosos_Produccion,
  }: Produccion) {
    const body = {
      Fecha_Produccion,
      Id_Empleado_Produccion,
      Id_Producto_Produccion,
      num_totalProduccion,
      num_Defectuosos_Produccion,
    };
    console.log(body);
    return this._http.post(
      'http://localhost:3000/tipProduccion',
      body,
      httpOptions
    );
  }
  // Método para MODIFICAR una prpducción
  putProduccion({
    Id_Produccion,
    Fecha_Produccion,
    Id_Empleado_Produccion,
    Id_Producto_Produccion,
    num_totalProduccion,
    num_Defectuosos_Produccion,
  }: Produccion) {
    const body = {
      Id_Produccion,
      Fecha_Produccion,
      Id_Empleado_Produccion,
      Id_Producto_Produccion,
      num_totalProduccion,
      num_Defectuosos_Produccion,
    };
    console.log(body);
    return this._http.put(
      'http://localhost:3000/tipProduccion',
      body,
      httpOptions
    );
  }
}
