import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { ServicioProduccion } from '../servicio-produccion.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Select } from '../produccion-interfaces';
import { ActivatedRoute } from '@angular/router';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.scss'],
})
export class InsertarComponent implements OnInit {
  public produc: any = [];
  public id: string = '';

  public form = new FormGroup({
    Id_Produccion: new FormControl(''),
    Fecha_Produccion: new FormControl(''),
    Id_Empleado_Produccion: new FormControl<Select>({ code: '', name: '' }),
    Id_Producto_Produccion: new FormControl<Select>({ code: '', name: '' }),
    num_totalProduccion: new FormControl(''),
    num_Defectuosos_Produccion: new FormControl(''),
  });
  public people: Select[] = [];
  constructor(
    private generalService: GeneralService,
    private servicioProduccion: ServicioProduccion,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];

    this.generalService
      .getCatalogos(`Tipo Producto`)
      .subscribe((data) => (this.produc = data));
    this.generalService
      .NombrePersonas()
      .subscribe((data) => (this.people = data));
  }
}
