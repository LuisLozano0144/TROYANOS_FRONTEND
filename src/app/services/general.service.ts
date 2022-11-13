import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, tap, map } from 'rxjs';

const httpOptions = {
  headers: new HttpParams(),
};

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  private Url: string = 'http//localhost:3000';

  constructor(private _http: HttpClient) {}

  // Método consultar tipos de catalogos
  getCatalogos(value: string) {
    const httpOptions = {
      params: new HttpParams().append('type', value),
    };
    return this._http
      .get(`http://localhost:3000/TipCatalogo/tipos/data`, httpOptions)
      .pipe(
        map((value) => {
          const temporaryData = [...(value as any)];
          const finalydata: any[] = [];
          temporaryData.forEach((items) => {
            finalydata.push({
              name: items.Nombre_Catalogo,
              code: items.Id_Catalogo,
            });
          });
          return finalydata;
        })
        //   tap((data) => {
        // //    this.catalogos.next(data as any);
        // console.log(data)
        //   })
      );
  }

  //consultar personas
  NombrePersonas() {
    return this._http.get('http://localhost:3000/tipEncargados').pipe(
      map((data) => {
        const people: any[] = [];
        (data as any).forEach((element: any) => {
          people.push({
            code: element.Id_Encargado,
            name: `${element.Nom1_Encargado} ${element.Apell1_Encargado}`,
          });
        });
        return people;
      })
    );
  }
  //consultar productos
  getProductos() {
    return this._http.get(`http://localhost:3000/TipProducto`).pipe(
      map((value) => {
        const temporaryData = [...(value as any)];
        const finalydata: any[] = [];
        temporaryData.forEach((items) => {
          finalydata.push({
            name: items.Nombre_Producto,
            code: items.Id_Producto,
          });
        });
        return finalydata;
      })
      //   tap((data) => {
      // //    this.catalogos.next(data as any);
      // console.log(data)
      //   })
    );
  }

  //consultar materiales
  getMateriales() {
    return this._http.get(`http://localhost:3000/TipMateriales`).pipe(
      map((value) => {
        const temporaryData = [...(value as any)];
        const finalydata: any[] = [];
        temporaryData.forEach((items) => {
          finalydata.push({
            name: items.nombre_material,
            code: items.id_material,
          });
        });
        return finalydata;
      })
      //   tap((data) => {
      // //    this.catalogos.next(data as any);
      // console.log(data)
      //   })
    );
  }
}
