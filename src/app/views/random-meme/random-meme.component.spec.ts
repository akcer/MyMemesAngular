import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomMemeComponent } from './random-meme.component';

describe('RandomMemeComponent', () => {
  let component: RandomMemeComponent;
  let fixture: ComponentFixture<RandomMemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomMemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomMemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
