import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { Reportes } from './informes.interface';
import { ServicioReporte } from '../servicio-reporte.service';
import { Select } from './informes.interface';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss'],
})
export class ReportesComponent implements OnInit {
  public filterByPerson: boolean = true;
  public fecha_ini: Date = new Date();
  public fecha_fin: Date = new Date();
  public optionId: Select = { code: '', name: '' };
  public stateSwitch: boolean = true;
  public dataTable: Reportes[] = [];

  public options: Select[] = [];

  handleChangeSwitch(first: boolean = false) {
    if (!first) {
      this.stateSwitch = true;
      this.filterByPerson = !this.filterByPerson;
    }

    if (this.filterByPerson) {
      this.generalService
        .NombrePersonas()
        .subscribe((data) => (this.options = data));
    } else {
      this.generalService
        .getProductos()
        .subscribe((data) => (this.options = data));
    }
  }

  findReport() {
    if (this.fecha_ini && this.fecha_fin && this.optionId) {
      if (this.filterByPerson) {
        console.log(this.fecha_ini);
        this.servicioReporte
          .getReportePersonas(
            this.fecha_ini,
            this.fecha_fin,
            this.optionId.code
          )
          .subscribe((data) => (this.dataTable = data));
      } else {
        this.servicioReporte
          .getReporteProductos(
            this.fecha_ini,
            this.fecha_fin,
            this.optionId.code
          )
          .subscribe((data) => (this.dataTable = data));
      }
    }
  }

  constructor(
    private generalService: GeneralService,
    private servicioReporte: ServicioReporte
  ) {
    this.filterByPerson = true;
  }

  ngOnInit(): void {
    this.handleChangeSwitch(true);
  }
}
