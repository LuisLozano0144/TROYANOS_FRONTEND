import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { ServicioPersona } from '../servicio-personas.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Select } from '../personas.interface';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.scss'],
})
export class InsertarComponent implements OnInit {
  public roles: any = [];
  public value: any;
  public sexo: any = [];
  public tipodoc: any = [];
  public id: string = '';
  public form = new FormGroup({
    username: new FormControl(''),
    lastname: new FormControl(''),
    roles: new FormControl<Select>({ code: '', name: '' }),
    sexo: new FormControl<Select>({ code: '', name: '' }),
    tipodoc: new FormControl<Select>({ code: '', name: '' }),
    numDoc: new FormControl(''),
    fecha: new FormControl(''),
  });

  onSubmit() {
    const Nom1_Encargado = this.form.value.username?.trim().split(' ')[0];
    const Nom2_Encargado = this.form.value.username?.trim().split(' ')[1] || '';
    const Apell1_Encargado = this.form.value.lastname?.trim().split(' ')[0];
    const Apell2_Encargado =
      this.form.value.lastname?.trim().split(' ')[1] || '';
    const Rol_Encargado = this.form.value.roles?.code;
    const Sexo_Encargado = this.form.value.sexo?.code;
    const Tip_Doc_Encargado = this.form.value.tipodoc?.code;
    const num_Doc_Encargado = this.form.value.numDoc as string;
    const FechaNacimiento_Encargado = this.form.value.fecha;

    if (
      Nom1_Encargado &&
      Apell1_Encargado &&
      Rol_Encargado &&
      Sexo_Encargado &&
      Tip_Doc_Encargado &&
      num_Doc_Encargado &&
      FechaNacimiento_Encargado
    ) {
      this.confirmationService.confirm({
        message: 'Esta seguro de insertar este colaborador?',
        accept: () => {
          this.serviciopersona
            .postPersonas({
              // Id_Encargado: this.id,
              Nom1_Encargado,
              Nom2_Encargado,
              Apell1_Encargado,
              Apell2_Encargado,
              Sexo_Encargado,
              FechaNacimiento_Encargado,
              Tip_Doc_Encargado,
              num_Doc_Encargado,
              Rol_Encargado,
            })
            .subscribe((data) => {
              console.log(data);
              this.messageService.add({
                key: 'myKey1',
                severity: 'success',
                summary: 'Confirmado',
                detail: 'Colaborador insertado',
              });
            });
        },
      });
    } else {
      if (!Nom1_Encargado)
        (document.getElementById('username') as HTMLDivElement).classList.add(
          'ng-invalid',
          'ng-dirty'
        );
      if (!Apell1_Encargado)
        (document.getElementById('lastname') as HTMLDivElement).classList.add(
          'ng-invalid',
          'ng-dirty'
        );
      if (!Rol_Encargado)
        (document.getElementById('roles') as HTMLDivElement).classList.add(
          'ng-invalid',
          'ng-dirty'
        );
      if (!Sexo_Encargado)
        (document.getElementById('sexo') as HTMLDivElement).classList.add(
          'ng-invalid',
          'ng-dirty'
        );
      if (!Tip_Doc_Encargado)
        (document.getElementById('tipodoc') as HTMLDivElement).classList.add(
          'ng-invalid',
          'ng-dirty'
        );
      if (!num_Doc_Encargado)
        (document.getElementById('numDoc') as HTMLDivElement).classList.add(
          'ng-invalid',
          'ng-dirty'
        );
      if (!FechaNacimiento_Encargado)
        (document.getElementById('fecha') as HTMLDivElement).classList.add(
          'ng-invalid',
          'ng-dirty'
        );
    }
  }
  public genders: Select[] = [
    { code: 'm', name: 'Masculino' },
    { code: 'f', name: 'Femenino' },
    { code: 'o', name: 'Otro' },
  ];
  constructor(
    private generalService: GeneralService,
    private serviciopersona: ServicioPersona,
    private activeRoute: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    this.generalService
      .getCatalogos(`Categoria empleado`)
      .subscribe((data) => (this.roles = data));

    this.generalService
      .getCatalogos(`Identificacion`)
      .subscribe((data) => (this.tipodoc = data));
  }
}
