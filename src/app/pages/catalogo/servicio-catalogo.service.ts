import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { Catalogos } from './catalogo.interfaces';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ServicioCatalogo {
  private Url: string = 'http//localhost:3000';
  private catalogos: BehaviorSubject<Catalogos[] | null> = new BehaviorSubject(
    null
  ) as BehaviorSubject<Catalogos[] | null>;
  get catalogos$(): Observable<Catalogos[]> {
    return this.catalogos.asObservable() as Observable<Catalogos[]>;
  }
  constructor(private _http: HttpClient) {}

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // SERVICIO CRUD DE TIPOS DE CATALOGO
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  // Método consultar tipos de catalogos
  getCatalogos() {
    return this._http
      .get('http://localhost:3000/TipCatalogo', httpOptions)
      .pipe(
        tap((data) => {
          this.catalogos.next(data as any);
        })
      );
  }

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // SERVICIO BUSCAR POR ID CATALOGOS
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  // Método consultar por id
  getCatalogo(id: string | number) {
    return this._http
      .get(`http://localhost:3000/TipCatalogo/${id}`, httpOptions)
      .pipe(
        tap((data) => {
          this.catalogos.next(data as any);
        })
      );
  }
}