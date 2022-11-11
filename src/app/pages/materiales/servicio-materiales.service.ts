import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { Materiales } from './materiales.interfaces';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ServicioMateriale {
  private Url: string = 'http//localhost:3000';
  private materiales: BehaviorSubject<Materiales[] | null> =
    new BehaviorSubject(null) as BehaviorSubject<Materiales[] | null>;
  get materiales$(): Observable<Materiales[]> {
    return this.materiales.asObservable() as Observable<Materiales[]>;
  }
  constructor(private _http: HttpClient) {}

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // SERVICIO  DE TIPOS DE MATERIALES
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  // Método consultar tipos de materiales
  getMateriales() {
    return this._http
      .get('http://localhost:3000/TipMateriales', httpOptions)
      .pipe(
        tap((data) => {
          this.materiales.next(data as any);
        })
      );
  }
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // SERVICIO BUSCAR POR ID MATERIALES
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  // Método consultar por id
  getMaterial(id: string | number) {
    return this._http
      .get(`http://localhost:3000/TipMateriales/${id}`, httpOptions)
      .pipe(
        tap((data) => {
          this.materiales.next(data as any);
        })
      );
  }
  // Método para INSERTAR un material
  postMaterial({
    Nombre_Material,
    Proveedor_Material,
    tel_Proveedor_Material,
    Tipo_Material,
    Uso_Material,
  }: Materiales) {
    const body = {
      Nombre_Material,
      Proveedor_Material,
      tel_Proveedor_Material,
      Tipo_Material,
      Uso_Material,
    };
    console.log(body);
    return this._http.post(
      'http://localhost:3000/TipMateriales',
      body,
      httpOptions
    );
  }
  // Método para MODIFICAR un material
  putMaterial({
    Id_Material,
    Nombre_Material,
    Proveedor_Material,
    tel_Proveedor_Material,
    Tipo_Material,
    Uso_Material,
  }: Materiales) {
    const body = {
      Id_Material,
      Nombre_Material,
      Proveedor_Material,
      tel_Proveedor_Material,
      Tipo_Material,
      Uso_Material,
    };
    console.log(body);
    return this._http.put(
      'http://localhost:3000/TipMateriales',
      body,
      httpOptions
    );
  }
}
