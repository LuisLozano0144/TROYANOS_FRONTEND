import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { ServicioMaterialesXproductos } from '../servicio-materiales-xproductos.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Select } from '../materiales-xproductos.interface';
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
  public nombremat: any = [];
  public nombreprod: any = [];

  public form = new FormGroup({
    IProducto_MaterialProducto: new FormControl<Select>({ code: '', name: '' }),
    IMaterial_MaterialProducto: new FormControl<Select>({ code: '', name: '' }),
    cantidad_MaterialProducto: new FormControl(''),
  });

  onSumbit() {
    const IProducto_MaterialProducto =
      this.form.value.IProducto_MaterialProducto?.code;
    const IMaterial_MaterialProducto =
      this.form.value.IMaterial_MaterialProducto?.code;
    const cantidad_MaterialProducto = this.form.value.cantidad_MaterialProducto;
    if (
      IProducto_MaterialProducto &&
      IMaterial_MaterialProducto &&
      cantidad_MaterialProducto
    ) {
      this.confirmationService.confirm({
        message: 'Esta seguro de modificar este material por productp?',
        accept: () => {
          this.servicioMaterialesXproductos
            .putMaterialXP({
              Id_MaterialProducto: this.id,
              IProducto_MaterialProducto,
              IMaterial_MaterialProducto,
              cantidad_MaterialProducto,
            })
            .subscribe((data) => {
              console.log(data);
              this.messageService.add({
                key: 'myKey1',
                severity: 'success',
                summary: 'Confirmado',
                detail: 'Material por producto modificado ',
              });
            });
        },
      });
    } else {
      if (!IProducto_MaterialProducto)
        (
          document.getElementById(
            'IProducto_MaterialProducto'
          ) as HTMLDivElement
        ).classList.add('ng-invalid', 'ng-dirty');
      if (!IMaterial_MaterialProducto)
        (
          document.getElementById(
            'IMaterial_MaterialProducto'
          ) as HTMLDivElement
        ).classList.add('ng-invalid', 'ng-dirty');
      if (!cantidad_MaterialProducto)
        (
          document.getElementById('cantidad_MaterialProducto') as HTMLDivElement
        ).classList.add('ng-invalid', 'ng-dirty');
    }
  }
  constructor(
    private generalService: GeneralService,
    private servicioMaterialesXproductos: ServicioMaterialesXproductos,
    private activeRoute: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];

    this.generalService
      .getMateriales()
      .subscribe((data) => (this.nombremat = data));
    this.generalService
      .getProductos()
      .subscribe((data) => (this.nombreprod = data));
  }
}
