import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Catalogos } from './catalogo.interfaces';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ServicioCatalogo {
  private Url: string = 'http//localhost:3000';

  constructor(private _http: HttpClient) {}

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // SERVICIO CRUD DE TIPOS DE CATALOGO
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  // Método Listar de los Tipos de documentos
  getCatalogos = new Observable<Catalogos[]>((subs) => {
    this._http
      .get('http://localhost:3000/TipCatalogo', httpOptions)
      .subscribe((data) => {
        subs.next(data as any);
      });
  });
}
