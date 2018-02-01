// Angular core
import { TestBed, inject } from '@angular/core/testing';

// Sipi custom
import { ActivityService } from '../services/activity.service';

describe('The activity service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivityService]
    });
  });

  it('should exist', inject([ActivityService], (service: ActivityService) => {
    expect(service).toBeTruthy();
  }));
});