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
}