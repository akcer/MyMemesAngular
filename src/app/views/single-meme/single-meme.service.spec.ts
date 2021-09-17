import { TestBed } from '@angular/core/testing';

import { SingleMemeService } from './single-meme.service';

describe('SingleMemeService', () => {
  let service: SingleMemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleMemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
