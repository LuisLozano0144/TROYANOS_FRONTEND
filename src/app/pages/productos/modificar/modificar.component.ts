import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { ServicioProductos } from '../servicio-productos.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Select } from '../productos.interface';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss'],
})
export class ModificarComponent implements OnInit {
  public id: string = '';
  public tipmat: any = [];
  public usomat: any = [];

  public form = new FormGroup({
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
      this.confirmationService.confirm({
        message: 'Esta seguro de modificar este producto?',
        accept: () => {
          this.servicioProductos
            .putProducto({
              Id_Producto: this.id,
              Nombre_Producto,
              Peso_Producto,
              Dimensiones_Producto,
              Tipo_producto,
              Estilo_Producto,
            })
            .subscribe((data) => {
              console.log(data);
              this.messageService.add({
                key: 'myKey1',
                severity: 'success',
                summary: 'Confirmado',
                detail: 'Producto insertado',
              });
            });
        },
      });
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
    private activeRoute: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    //   this.id = this.activeRoute.snapshot.params['id'];

    //   this.generalService
    //     .getCatalogos(`comidisimo`)
    //     .subscribe((data) => (this.usomat = data));
    //   this.generalService
    //     .getCatalogos(`hogar`)
    //     .subscribe((data) => (this.tipmat = data));
    // }
    this.id = this.activeRoute.snapshot.params['id'];

    this.generalService.getCatalogos(`Estilo_producto`).subscribe((data) => {
      this.usomat = data;
      this.generalService.getCatalogos(`Tipo_Producto`).subscribe((data) => {
        this.tipmat = data;
        this.servicioProductos.getProducto(this.id).subscribe((data: any) => {
          this.form.setValue({
            Nombre_Producto: data[0].Nombre_Producto,
            Peso_Producto: data[0].Peso_Producto,
            Dimensiones_Producto: data[0].Dimensiones_Producto,
            Tipo_producto: this.tipmat.find(
              (respon: any) => respon.name === data[0].Nombre_Catalogo
            ) as any,
            Estilo_Producto: this.usomat.find(
              (respon: any) => respon.name === data[0].Tipo_Catalogo
            ) as any,
          });
        });
      });
    });
  }
}
