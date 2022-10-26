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
}