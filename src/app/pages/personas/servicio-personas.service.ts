import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Personas } from './personas.interface';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class ServicioPersona {
  private Url: string = 'http://localhost:3000';
  private personas: BehaviorSubject<Personas[] | null> = new BehaviorSubject(
    null
  ) as BehaviorSubject<Personas[] | null>;
  get personas$(): Observable<Personas[]> {
    return this.personas.asObservable() as Observable<Personas[]>;
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
  // Método para EDITAR una persona
  putPersonas({
    Id_Encargado,
    Nom1_Encargado,
    Nom2_Encargado,
    Apell1_Encargado,
    Apell2_Encargado,
    Sexo_Encargado,
    FechaNacimiento_Encargado,
    Tip_Doc_Encargado,
    num_Doc_Encargado,
    Rol_Encargado,
  }: Personas) {
    const body = {
      Id_Encargado,
      Nom1_Encargado,
      Nom2_Encargado,
      Apell1_Encargado,
      Apell2_Encargado,
      Sexo_Encargado,
      FechaNacimiento_Encargado,
      Tip_Doc_Encargado,
      num_Doc_Encargado,
      Rol_Encargado,
    };
    console.log(body);
    return this._http.put(
      'http://localhost:3000/tipEncargados',
      body,
      httpOptions
    );
  }
  // Método para INSERTAR una persona
  postPersonas({
    Id_Encargado,
    Nom1_Encargado,
    Nom2_Encargado,
    Apell1_Encargado,
    Apell2_Encargado,
    Sexo_Encargado,
    FechaNacimiento_Encargado,
    Tip_Doc_Encargado,
    num_Doc_Encargado,
    Rol_Encargado,
  }: Personas) {
    const body = {
      // Id_Encargado,
      Nom1_Encargado,
      Nom2_Encargado,
      Apell1_Encargado,
      Apell2_Encargado,
      Sexo_Encargado,
      FechaNacimiento_Encargado,
      Tip_Doc_Encargado,
      num_Doc_Encargado,
      Rol_Encargado,
    };
    console.log(body);
    return this._http.post(
      'http://localhost:3000/tipEncargados',
      body,
      httpOptions
    );
  }
}
