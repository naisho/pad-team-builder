import { TestBed, inject } from '@angular/core/testing';

import { MonsterListService } from '../monster-list/monster-list.service';

describe('MonsterListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonsterListService]
    });
  });

  it('should be created', inject([MonsterListService], (service: MonsterListService) => {
    expect(service).toBeTruthy();
  }));
});
