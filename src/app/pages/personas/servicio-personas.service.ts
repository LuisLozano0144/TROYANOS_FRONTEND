import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { personas } from './personas.interfaces.module';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class ServicioPersona {
  private Url: string = 'http://localhost:3000';
  private personas: BehaviorSubject<personas[] | null> = new BehaviorSubject(
    null
  ) as BehaviorSubject<personas[] | null>;
  get personas$(): Observable<personas[]> {
    return this.personas.asObservable() as Observable<personas[]>;
  }
  constructor(private _http: HttpClient) {}

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // SERVICIO PERSONAS O ENCARGADOS
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  // Método consultar personas o encargados
  getPersonas() {
    return this._http
      .get('http://localhost:3000/tipEncargados', httpOptions)
      .pipe(
        tap((data) => {
          this.personas.next(data as any);
        })
      );
  }
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // SERVICIO BUSCAR POR ID PERSONAS
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  // Método consultar por id
  getPersona(id: string | number) {
    return this._http
      .get(`http://localhost:3000/tipEncargados/${id}`, httpOptions)
      .pipe(
        tap((data) => {
          this.personas.next(data as any);
        })
      );
  }
}
