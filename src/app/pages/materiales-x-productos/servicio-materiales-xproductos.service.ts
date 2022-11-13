import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { MaterialesXProducto } from './materiales-xproductos.interface';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ServicioMaterialesXproductos {
  private Url: string = 'http//localhost:3000';
  private materialesXproduccion: BehaviorSubject<MaterialesXProducto[] | null> =
    new BehaviorSubject(null) as BehaviorSubject<MaterialesXProducto[] | null>;
  get materialesXproduccion$(): Observable<MaterialesXProducto[]> {
    return this.materialesXproduccion.asObservable() as Observable<
      MaterialesXProducto[]
    >;
  }
  constructor(private _http: HttpClient) {}
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // SERVICIO  DE TABLA DE PASO
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  // Método consultar tabla de paso
  getmaterialesXproduccion() {
    return this._http
      .get('http://localhost:3000/Tipmaterialesproductos', httpOptions)
      .pipe(
        tap((data) => {
          this.materialesXproduccion.next(data as any);
        })
      );
  }
  // Método consultar por id
  getMaterial(id: string | number) {
    return this._http
      .get(`http://localhost:3000/Tipmaterialesproductos/${id}`, httpOptions)
      .pipe(
        tap((data) => {
          this.materialesXproduccion.next(data as any);
        })
      );
  }
  // Método para INSERTAR
  postMaterialXP({
    IProducto_MaterialProducto,
    IMaterial_MaterialProducto,
    cantidad_MaterialProducto,
  }: MaterialesXProducto) {
    const body = {
      IProducto_MaterialProducto,
      IMaterial_MaterialProducto,
      cantidad_MaterialProducto,
    };
    console.log(body);
    return this._http.post(
      'http://localhost:3000/Tipmaterialesproductos',
      body,
      httpOptions
    );
  }
  // Método para MODIFICAR
  putMaterialXP({
    Id_MaterialProducto,
    IProducto_MaterialProducto,
    IMaterial_MaterialProducto,
    cantidad_MaterialProducto,
  }: MaterialesXProducto) {
    const body = {
      Id_MaterialProducto,
      IProducto_MaterialProducto,
      IMaterial_MaterialProducto,
      cantidad_MaterialProducto,
    };
    console.log(body);
    return this._http.put(
      'http://localhost:3000/Tipmaterialesproductos',
      body,
      httpOptions
    );
  }
}
