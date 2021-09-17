import { TestBed } from '@angular/core/testing';

import { AddNewMemeService } from './add-new-meme.service';

describe('AddNewMemeService', () => {
  let service: AddNewMemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddNewMemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
