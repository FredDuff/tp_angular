import { TestBed } from '@angular/core/testing';

import { TwService } from './tw.service';

describe('TwService', () => {
  let service: TwService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
