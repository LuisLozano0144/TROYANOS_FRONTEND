import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { ServicioMateriale } from '../servicio-materiales.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Select } from '../materiales.interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.scss'],
})
export class InsertarComponent implements OnInit {
  public id: string = '';
  public usomat: any = [];
  public tipmat: any = [];

  public form = new FormGroup({
    id_material: new FormControl(''),
    Nombre_Material: new FormControl(''),
    Proveedor_Material: new FormControl(''),
    tel_Proveedor_Material: new FormControl(''),
    Tipo_Material: new FormControl<Select>({ code: '', name: '' }),
    Uso_Material: new FormControl<Select>({ code: '', name: '' }),
  });

  onSubmit() {
    const Nombre_Material = this.form.value.Nombre_Material;
    const Proveedor_Material = this.form.value.Proveedor_Material;
    const tel_Proveedor_Material = this.form.value.tel_Proveedor_Material;
    const Tipo_Material = this.form.value.Tipo_Material?.code;
    const Uso_Material = this.form.value.Uso_Material?.code;

    if (
      Nombre_Material &&
      Proveedor_Material &&
      tel_Proveedor_Material &&
      Tipo_Material &&
      Uso_Material
    ) {
      this.servicioMateriale
        .postMaterial({
          Nombre_Material,
          Proveedor_Material,
          tel_Proveedor_Material,
          Tipo_Material,
          Uso_Material,
        })
        .subscribe(console.log);
    } else {
      if (!Nombre_Material)
        (
          document.getElementById('Nombre_Material') as HTMLDivElement
        ).classList.add('ng-invalid', 'ng-dirty');
      if (!Proveedor_Material)
        (
          document.getElementById('Proveedor_Material') as HTMLDivElement
        ).classList.add('ng-invalid', 'ng-dirty');
      if (!tel_Proveedor_Material)
        (
          document.getElementById('tel_Proveedor_Material') as HTMLDivElement
        ).classList.add('ng-invalid', 'ng-dirty');
      if (!Tipo_Material)
        (
          document.getElementById('Tipo_Material') as HTMLDivElement
        ).classList.add('ng-invalid', 'ng-dirty');
      if (!Uso_Material)
        (
          document.getElementById('Uso_Material') as HTMLDivElement
        ).classList.add('ng-invalid', 'ng-dirty');
    }
  }
  public nameMaterial = [];
  constructor(
    private generalService: GeneralService,
    private servicioMateriale: ServicioMateriale,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];

    this.generalService
      .getCatalogos(`Tipo Producto`)
      .subscribe((data) => (this.usomat = data));
    this.generalService
      .getCatalogos(`Estilo Producto`)
      .subscribe((data) => (this.tipmat = data));
  }
}
