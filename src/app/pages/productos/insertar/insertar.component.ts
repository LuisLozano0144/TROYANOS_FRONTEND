import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { ServicioProductos } from '../servicio-productos.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Select } from '../productos.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.scss'],
})
export class InsertarComponent implements OnInit {
  public id: string = '';
  public tipmat: any = [];
  public usomat: any = [];

  public form = new FormGroup({
    Id_Producto: new FormControl(''),
    Nombre_Producto: new FormControl(''),
    Peso_Producto: new FormControl(''),
    Dimensiones_Producto: new FormControl(''),
    Tipo_producto: new FormControl<Select>({ code: '', name: '' }),
    Estilo_Producto: new FormControl<Select>({ code: '', name: '' }),
  });

  onSubmit() {
    const Nombre_Producto = this.form.value.Nombre_Producto;
    const Peso_Producto = this.form.value.Peso_Producto;
    const Dimensiones_Producto = this.form.value.Dimensiones_Producto;
    const Tipo_producto = this.form.value.Tipo_producto?.code;
    const Estilo_Producto = this.form.value.Estilo_Producto?.code;

    if (
      Nombre_Producto &&
      Peso_Producto &&
      Dimensiones_Producto &&
      Tipo_producto &&
      Estilo_Producto
    ) {
      this.servicioProductos
        .postProducto({
          Nombre_Producto,
          Peso_Producto,
          Dimensiones_Producto,
          Tipo_producto,
          Estilo_Producto,
        })
        .subscribe(console.log);
    } else {
      if (!Nombre_Producto)
        (
          document.getElementById('Nombre_Producto') as HTMLDivElement
        ).classList.add('ng-invalid', 'ng-dirty');
      if (!Peso_Producto)
        (
          document.getElementById('Peso_Producto') as HTMLDivElement
        ).classList.add('ng-invalid', 'ng-dirty');
      if (!Dimensiones_Producto)
        (
          document.getElementById('Dimensiones_Producto') as HTMLDivElement
        ).classList.add('ng-invalid', 'ng-dirty');
      if (!Tipo_producto)
        (
          document.getElementById('Tipo_producto') as HTMLDivElement
        ).classList.add('ng-invalid', 'ng-dirty');
      if (!Estilo_Producto)
        (
          document.getElementById('Estilo_Producto') as HTMLDivElement
        ).classList.add('ng-invalid', 'ng-dirty');
    }
  }
  constructor(
    private generalService: GeneralService,
    private servicioProductos: ServicioProductos,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];

    this.generalService
      .getCatalogos(`comidisimo`)
      .subscribe((data) => (this.usomat = data));
    this.generalService
      .getCatalogos(`hogar`)
      .subscribe((data) => (this.tipmat = data));
  }
}
