import { TestBed, inject } from '@angular/core/testing';

import { Servicio1Service } from './servicio1.service';

describe('Servicio1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Servicio1Service]
    });
  });

  it('should be created', inject([Servicio1Service], (service: Servicio1Service) => {
    expect(service).toBeTruthy();
  }));
});
