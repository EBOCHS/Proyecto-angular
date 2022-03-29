import { TestBed } from '@angular/core/testing';

import { GuardChildGuard } from './guard-child.guard';

describe('GuardChildGuard', () => {
  let guard: GuardChildGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardChildGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
