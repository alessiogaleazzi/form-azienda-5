import { TestBed } from '@angular/core/testing';

import { ProgettoService } from './progetto.service';

describe('ProgettoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProgettoService = TestBed.get(ProgettoService);
    expect(service).toBeTruthy();
  });
});
