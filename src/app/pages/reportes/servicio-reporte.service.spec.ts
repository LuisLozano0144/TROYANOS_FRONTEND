import { TestBed } from '@angular/core/testing';

import { ServicioReporteService } from './servicio-reporte.service';

describe('ServicioReporteService', () => {
  let service: ServicioReporteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioReporteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
