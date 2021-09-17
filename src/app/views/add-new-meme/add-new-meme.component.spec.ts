import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewMemeComponent } from './add-new-meme.component';

describe('AddNewMemeComponent', () => {
  let component: AddNewMemeComponent;
  let fixture: ComponentFixture<AddNewMemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewMemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewMemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
