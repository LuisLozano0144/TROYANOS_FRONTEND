import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { ServicioCatalogo } from '../servicio-catalogo.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Select } from '../catalogo.interfaces';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.scss'],
})
export class InsertarComponent implements OnInit {
  public id: string = '';

  public form = new FormGroup({
    Nombre_Catalogo: new FormControl(''),
    Tipo_Catalogo: new FormControl<Select>({ code: '', name: '' }),
  });

  onSubmit() {
    const Nombre_Catalogo = this.form.value.Nombre_Catalogo;
    const Tipo_Catalogo = this.form.value.Tipo_Catalogo?.name;

    if (Nombre_Catalogo && Tipo_Catalogo) {
      this.servicioCatalogo
        .postCatalogo({
          Nombre_Catalogo,
          Tipo_Catalogo,
        })
        .subscribe(console.log);
    } else {
      if (!Nombre_Catalogo)
        (
          document.getElementById('Nombre_Catalogo') as HTMLDivElement
        ).classList.add('ng-invalid', 'ng-dirty');
      if (!Tipo_Catalogo)
        (
          document.getElementById('Tipo_Catalogo') as HTMLDivElement
        ).classList.add('ng-invalid', 'ng-dirty');
    }
  }
  public tipcatalogo: Select[] = [];
  constructor(
    private generalService: GeneralService,
    private servicioCatalogo: ServicioCatalogo,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];

    this.generalService
      .getCatalogos(`tipo_contacto`)
      .subscribe((data) => (this.tipcatalogo = data));
  }
}
