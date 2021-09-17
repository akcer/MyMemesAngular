import { TestBed } from '@angular/core/testing';

import { RandomMemeService } from './random-meme.service';

describe('RandomMemeService', () => {
  let service: RandomMemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomMemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
