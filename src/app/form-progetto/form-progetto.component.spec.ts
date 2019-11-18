import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProgettoComponent } from './form-progetto.component';

describe('FormProgettoComponent', () => {
  let component: FormProgettoComponent;
  let fixture: ComponentFixture<FormProgettoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormProgettoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProgettoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
