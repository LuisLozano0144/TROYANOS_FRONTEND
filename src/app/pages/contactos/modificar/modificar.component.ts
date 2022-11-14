import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { ServicioContacto } from '../servicio-contactos.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Select } from '../contacto-interfaces';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss'],
})
export class ModificarComponent implements OnInit {
  public id: string = '';
  public nombre: any[] = [];
  public tipcontac: any[] = [];

  public form = new FormGroup({
    Dato_Contacto: new FormControl(''),
    Encargado_Contacto: new FormControl<Select>({ code: '', name: '' }),
    Tipo_Contacto: new FormControl<Select>({ code: '', name: '' }),
  });
  onSubmit() {
    const Dato_Contacto = this.form.value.Dato_Contacto;
    const Encargado_Contacto = this.form.value.Encargado_Contacto?.code;
    const Tipo_Contacto = this.form.value.Tipo_Contacto?.code;

    if (Dato_Contacto && Encargado_Contacto && Tipo_Contacto) {
      this.confirmationService.confirm({
        message: 'Esta seguro de modificar este contacto?',
        accept: () => {
          this.servicioContacto
            .putContacto({
              Id_Contactos: this.id,
              Dato_Contacto,
              Encargado_Contacto,
              Tipo_Contacto,
            })
            .subscribe((data) => {
              console.log(data);
              this.messageService.add({
                key: 'myKey1',
                severity: 'success',
                summary: 'Confirmado',
                detail: 'Contacto modificado',
              });
            });
        },
      });
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
    private activeRoute: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];

    this.generalService.getCatalogos(`tipo_contacto`).subscribe((data) => {
      this.tipcontac = data;

      this.generalService.NombrePersonas().subscribe((data) => {
        this.people = data;

        this.servicioContacto.getContacto(this.id).subscribe((data: any) => {
          this.form.setValue({
            Dato_Contacto: data[0].Dato_Contacto,
            Encargado_Contacto: this.people.find(
              (item: any) =>
                item.name ===
                `${data[0].Nombre_Encargado} ${data[0].Apellido_Encargado}`
            ) as any,
            Tipo_Contacto: this.tipcontac.find(
              (result: any) => result.name === data[0].tipo_contacto
            ),
          });
        });
      });
    });
  }
}
