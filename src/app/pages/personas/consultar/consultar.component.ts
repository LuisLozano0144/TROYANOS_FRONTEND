import { Component, OnInit } from '@angular/core';
import { ServicioPersona } from '../servicio-personas.service';
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
  constructor(private servicioPersona: ServicioPersona) {}

  ngOnInit(): void {
    this.servicioPersona.getPersonas().subscribe();
    this.servicioPersona.personas$.subscribe((data) => (this.personas = data));
  }
}
