import { TestBed, inject } from '@angular/core/testing';

import { DefaultServiceService } from './default-service.service';

describe('DefaultServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DefaultServiceService]
    });
  });

  it('should be created', inject([DefaultServiceService], (service: DefaultServiceService) => {
    expect(service).toBeTruthy();
  }));
});
