// Angular core
import { TestBed, inject } from '@angular/core/testing';

// Sipi custom
import { InputToggleService } from '../services/input-toggle.service';

describe('The input toggle service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InputToggleService]
    });
  });

  it('should exist', inject([InputToggleService], (service: InputToggleService) => {
    expect(service).toBeTruthy();
  }));
});