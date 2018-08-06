import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroFacialComponent } from './registro-facial.component';

describe('RegistroFacialComponent', () => {
  let component: RegistroFacialComponent;
  let fixture: ComponentFixture<RegistroFacialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroFacialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroFacialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
