import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcoashComponent } from './addcoash.component';

describe('AddcoashComponent', () => {
  let component: AddcoashComponent;
  let fixture: ComponentFixture<AddcoashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcoashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcoashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
