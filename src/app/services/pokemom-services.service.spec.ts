import { TestBed } from '@angular/core/testing';

import { PokemomServicesService } from './pokemom-services.service';

describe('PokemomServicesService', () => {
  let service: PokemomServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemomServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
