import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { ServicioContacto } from '../servicio-contactos.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Select } from '../contacto-interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.scss'],
})
export class InsertarComponent implements OnInit {
  public id: string = '';
  public nombre: any = [];
  public tipcontac: any = [];

  public form = new FormGroup({
    Id_Contactos: new FormControl(''),
    Dato_Contacto: new FormControl(''),
    Encargado_Contacto: new FormControl<Select>({ code: '', name: '' }),
    Tipo_Contacto: new FormControl<Select>({ code: '', name: '' }),
    nombre: new FormControl<Select>({ code: '', name: '' }),
  });

  onSubmit() {
    const Dato_Contacto = this.form.value.Dato_Contacto;
    const Encargado_Contacto = this.form.value.Encargado_Contacto?.code;
    const Tipo_Contacto = this.form.value.Tipo_Contacto?.code;

    if (Dato_Contacto && Encargado_Contacto && Tipo_Contacto) {
      this.servicioContacto
        .postContacto({
          // Id_Encargado: this.id
          Dato_Contacto,
          Encargado_Contacto,
          Tipo_Contacto,
        })
        .subscribe(console.log);
    } else {
      if (!Dato_Contacto)
        (
          document.getElementById('Dato_Contacto') as HTMLDivElement
        ).classList.add('ng-invalid', 'ng-dirty');
      if (!Encargado_Contacto)
        (
          document.getElementById('Encargado_Contacto') as HTMLDivElement
        ).classList.add('ng-invalid', 'ng-dirty');
      if (!Tipo_Contacto)
        (
          document.getElementById('Tipo_Contacto') as HTMLDivElement
        ).classList.add('ng-invalid', 'ng-dirty');
    }
  }
  public people: Select[] = [];
  constructor(
    private generalService: GeneralService,
    private servicioContacto: ServicioContacto,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];

    this.generalService
      .getCatalogos(`tipo_contacto`)
      .subscribe((data) => (this.tipcontac = data));
    this.generalService
      .NombrePersonas()
      .subscribe((data) => (this.people = data));
  }
}
