import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { Productos } from './productos.interface';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ServicioProductos {
  private Url: string = 'http//localhost:3000';
  private productos: BehaviorSubject<Productos[] | null> = new BehaviorSubject(
    null
  ) as BehaviorSubject<Productos[] | null>;
  get productos$(): Observable<Productos[]> {
    return this.productos.asObservable() as Observable<Productos[]>;
  }
  constructor(private _http: HttpClient) {}
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // SERVICIO CRUD DE TIPOS DE PRODUCTOS
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  // Método consultar tipos de productos
  getProductos() {
    return this._http
      .get('http://localhost:3000/TipProducto', httpOptions)
      .pipe(
        tap((data) => {
          this.productos.next(data as any);
        })
      );
  }
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // SERVICIO BUSCAR POR ID PRODUCTOS
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  // Método consultar por id
  getProducto(id: string | number) {
    return this._http
      .get(`http://localhost:3000/TipProducto/${id}`, httpOptions)
      .pipe(
        tap((data) => {
          this.productos.next(data as any);
        })
      );
  }
  // Método para INSERTAR un producto
  postProducto({
    Nombre_Producto,
    Peso_Producto,
    Dimensiones_Producto,
    Tipo_producto,
    Estilo_Producto,
  }: Productos) {
    const body = {
      Nombre_Producto,
      Peso_Producto,
      Dimensiones_Producto,
      Tipo_producto,
      Estilo_Producto,
    };
    console.log(body);
    return this._http.post(
      'http://localhost:3000/TipProducto',
      body,
      httpOptions
    );
  }
  //Metodo para MODIFICAR un producto
  putProducto({
    Id_Producto,
    Nombre_Producto,
    Peso_Producto,
    Dimensiones_Producto,
    Tipo_producto,
    Estilo_Producto,
  }: Productos) {
    const body = {
      Id_Producto,
      Nombre_Producto,
      Peso_Producto,
      Dimensiones_Producto,
      Tipo_producto,
      Estilo_Producto,
    };
    console.log(body);
    return this._http.put(
      'http://localhost:3000/TipProducto',
      body,
      httpOptions
    );
  }
}
