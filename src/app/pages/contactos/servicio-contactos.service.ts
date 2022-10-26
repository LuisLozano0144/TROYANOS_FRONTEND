import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contactos } from './contacto-interfaces';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class ServicioContacto {
  private Url: string = 'http//localhost:3000';

  constructor(private _http: HttpClient) {}

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // SERVICIO CRUD DE TIPOS DE CONTACTOS
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  // Método consultar tipos de contactos
  getContactos = new Observable<Contactos[]>((subs) => {
    this._http
      .get('http://localhost:3000/TipConct', httpOptions)
      .subscribe((data) => {
        subs.next(data as any);
      });
  });
}
