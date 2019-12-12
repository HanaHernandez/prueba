import { TestBed } from '@angular/core/testing';

import { AutenticathionService } from './autenticathion.service';

describe('AutenticathionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutenticathionService = TestBed.get(AutenticathionService);
    expect(service).toBeTruthy();
  });
});
