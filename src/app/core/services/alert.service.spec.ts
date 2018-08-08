// Angular core
import { TestBed, inject } from '@angular/core/testing';

// Sipi custom
import { AlertService } from '../services/alert.service';

describe('The alert service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertService]
    });
  });

  it('should exist', inject([AlertService], (service: AlertService) => {
    expect(service).toBeTruthy();
  }));
});