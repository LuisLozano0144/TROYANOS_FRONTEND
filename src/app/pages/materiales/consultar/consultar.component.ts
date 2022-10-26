import { Component, OnInit } from '@angular/core';
import { ServicioMateriale } from '../servicio-materiales.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.scss'],
})
export class ConsultarComponent implements OnInit {
  public materiales: any = [];
  public id: string = '';

  buscarID() {
    this.ServicioMateriale.getMaterial(this.id).subscribe();
    this.ServicioMateriale.materiales$.subscribe(
      (data) => (this.materiales = data)
    );
  }
  constructor(private ServicioMateriale: ServicioMateriale) {}

  ngOnInit(): void {
    this.ServicioMateriale.getMateriales().subscribe();
    this.ServicioMateriale.materiales$.subscribe(
      (data) => (this.materiales = data)
    );
  }
}
