import { TestBed, inject } from '@angular/core/testing';

import { PADHerderService } from './pad-herder.service';

describe('PadHerderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PADHerderService]
    });
  });

  it('should be created', inject([PADHerderService], (service: PadHerderService) => {
    expect(service).toBeTruthy();
  }));
});
