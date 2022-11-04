import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { ServicioContacto } from '../servicio-contactos.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss'],
})
export class ModificarComponent implements OnInit {
  constructor(
    private generalService: GeneralService,
    private servicioContacto: ServicioContacto,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}
}
