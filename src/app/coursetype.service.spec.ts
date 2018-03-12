import { TestBed, inject } from '@angular/core/testing';

import { CoursetypeService } from './coursetype.service';

describe('CoursetypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursetypeService]
    });
  });

  it('should be created', inject([CoursetypeService], (service: CoursetypeService) => {
    expect(service).toBeTruthy();
  }));
});
