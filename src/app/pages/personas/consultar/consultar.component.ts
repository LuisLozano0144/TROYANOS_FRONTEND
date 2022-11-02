import { Component, OnInit } from '@angular/core';
import { ServicioPersona } from '../servicio-personas.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.scss'],
})
export class ConsultarComponent implements OnInit {
  public personas: any = [];
  public id: string = '';

  buscarID() {
    this.servicioPersona.getPersona(this.id).subscribe();
    this.servicioPersona.personas$.subscribe((data) => (this.personas = data));
  }

  EditarID(id: string) {
    this.ruta.navigateByUrl(`/personas/modificar/${id}`);
  }
  constructor(private servicioPersona: ServicioPersona, private ruta: Router) {}

  ngOnInit(): void {
    this.servicioPersona.getPersonas().subscribe();
    this.servicioPersona.personas$.subscribe((data) => {
      console.log(data);
      this.personas = data;
    });
  }
}
