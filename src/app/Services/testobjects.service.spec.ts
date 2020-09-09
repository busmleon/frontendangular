import { TestBed } from '@angular/core/testing';

import { TestobjectsService } from './testobjects.service';

describe('PostTestobjectsService', () => {
  let service: TestobjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestobjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
