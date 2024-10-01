import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { sportGuard } from './sport.guard';

describe('sportGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => sportGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
