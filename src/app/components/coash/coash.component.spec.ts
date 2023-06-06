import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoashComponent } from './coash.component';

describe('CoashComponent', () => {
  let component: CoashComponent;
  let fixture: ComponentFixture<CoashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
