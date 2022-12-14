import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { ServicioProduccion } from '../servicio-produccion.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Select } from '../produccion-interfaces';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss'],
})
export class ModificarComponent implements OnInit {
  public produc: any = [];
  public id: string = '';

  public form = new FormGroup({
    Fecha_Produccion: new FormControl(''),
    Id_Empleado_Produccion: new FormControl<Select>({ code: '', name: '' }),
    Id_Producto_Produccion: new FormControl<Select>({ code: '', name: '' }),
    num_totalProduccion: new FormControl(''),
    num_Defectuosos_Produccion: new FormControl(''),
  });

  onSubmit() {
    const Fecha_Produccion = this.form.value.Fecha_Produccion;
    const Id_Empleado_Produccion = this.form.value.Id_Empleado_Produccion?.code;
    const Id_Producto_Produccion = this.form.value.Id_Producto_Produccion?.code;
    const num_totalProduccion = this.form.value.num_totalProduccion;
    const num_Defectuosos_Produccion =
      this.form.value.num_Defectuosos_Produccion;
    if (
      Fecha_Produccion &&
      Id_Empleado_Produccion &&
      Id_Producto_Produccion &&
      num_totalProduccion &&
      num_Defectuosos_Produccion
    ) {
      this.confirmationService.confirm({
        message: 'Esta seguro de modificar esta producción?',
        accept: () => {
          this.servicioProduccion
            .putProduccion({
              Id_Produccion: this.id,
              Fecha_Produccion,
              Id_Empleado_Produccion,
              Id_Producto_Produccion,
              num_totalProduccion,
              num_Defectuosos_Produccion,
            })
            .subscribe((data) => {
              console.log(data);
              this.messageService.add({
                key: 'myKey1',
                severity: 'success',
                summary: 'Confirmado',
                detail: 'Producción modificada',
              });
            });
        },
      });
    } else {
      if (!Fecha_Produccion)
        (
          document.getElementById('Fecha_Produccion') as HTMLDivElement
        ).classList.add('ng-invalid', 'ng-dirty');
      if (!Id_Empleado_Produccion)
        (
          document.getElementById('Id_Empleado_Produccion') as HTMLDivElement
        ).classList.add('ng-invalid', 'ng-dirty');
      if (!Id_Producto_Produccion)
        (
          document.getElementById('Id_Producto_Produccion') as HTMLDivElement
        ).classList.add('ng-invalid', 'ng-dirty');
      if (!num_totalProduccion)
        (
          document.getElementById('num_totalProduccion') as HTMLDivElement
        ).classList.add('ng-invalid', 'ng-dirty');
      if (!num_Defectuosos_Produccion)
        (
          document.getElementById(
            'num_Defectuosos_Produccion'
          ) as HTMLDivElement
        ).classList.add('ng-invalid', 'ng-dirty');
    }
  }

  public people: Select[] = [];
  constructor(
    private generalService: GeneralService,
    private servicioProduccion: ServicioProduccion,
    private activeRoute: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];

    this.generalService
      .getProductos()
      .subscribe((data) => (this.produc = data));
    this.generalService
      .NombrePersonas()
      .subscribe((data) => (this.people = data));
  }
  // ngOnInit(): void {
  //   this.id = this.activeRoute.snapshot.params['id'];

  //   this.generalService.getProductos().subscribe((data) => {
  //     this.produc = data;

  //     this.generalService.NombrePersonas().subscribe((ata: any) => {
  //       this.people = data;
  //       this.servicioProduccion
  //         .getProduccion(this.id)
  //         .subscribe((data: any) => {
  //           console.log(data);

  //           console.log(
  //             this.produc.find((result: any) => {
  //               console.log(result);
  //               return result.name === data[0].Nombre_Producto;
  //             })
  //           );

  //           this.form.setValue({
  //             Fecha_Produccion: data[0].Fecha_Produccion,
  //             num_totalProduccion: data[0].num_totalProduccion,
  //             num_Defectuosos_Produccion: data[0].num_Defectuosos_Produccion,
  //             Id_Empleado_Produccion: this.people.find(
  //               (item: any) =>
  //                 item.name.split(' ')[0] === data[0].Nombre_Empleado
  //             ) as any,
  //             Id_Producto_Produccion: this.produc.find(
  //               (result: any) => result.name === data[0].Nombre_producto
  //             ),
  //           });
  //         });
  //     });
  //   });
  // }
}
