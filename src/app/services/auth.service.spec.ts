// Angular core
import { TestBed, inject } from '@angular/core/testing';

// Sipi custom
import { AuthService } from '../services/auth.service';

describe('The auth service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
  });

  it('should exist', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});