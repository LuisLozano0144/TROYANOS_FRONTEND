import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Contactos } from './contacto-interfaces';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class ServicioContacto {
  private Url: string = 'http//localhost:3000';
  private contactos: BehaviorSubject<Contactos[] | null> = new BehaviorSubject(
    null
  ) as BehaviorSubject<Contactos[] | null>;
  get contactos$(): Observable<Contactos[]> {
    return this.contactos.asObservable() as Observable<Contactos[]>;
  }

  constructor(private _http: HttpClient) {}

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // SERVICIO CRUD DE TIPOS DE CONTACTOS
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  // Método consultar tipos de contactos
  getContactos() {
    return this._http.get('http://localhost:3000/TipConct', httpOptions).pipe(
      tap((data) => {
        this.contactos.next(data as any);
      })
    );
  }

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // SERVICIO BUSCAR POR ID CONTACTOS
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  // Método consultar por id
  getContacto(id: string | number) {
    return this._http
      .get(`http://localhost:3000/TipConct/${id}`, httpOptions)
      .pipe(
        tap((data) => {
          this.contactos.next(data as any);
        })
      );
  }

  // Método para INSERTAR un contacto
  postContacto({
    Dato_Contacto,
    Encargado_Contacto,
    Tipo_Contacto,
  }: Contactos) {
    const body = {
      Dato_Contacto,
      Encargado_Contacto,
      Tipo_Contacto,
    };
    console.log(body);
    return this._http.post('http://localhost:3000/TipConct', body, httpOptions);
  }
  //Metodo para MODIFICAR un contacto
  putContacto({
    Id_Contactos,
    Dato_Contacto,
    Encargado_Contacto,
    Tipo_Contacto,
  }: Contactos) {
    const body = {
      Id_Contactos,
      Dato_Contacto,
      Encargado_Contacto,
      Tipo_Contacto,
    };
    console.log(body);
    return this._http.put('http://localhost:3000/TipConct', body, httpOptions);
  }
}
