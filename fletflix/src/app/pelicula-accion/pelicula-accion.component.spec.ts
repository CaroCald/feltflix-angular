import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaAccionComponent } from './pelicula-accion.component';

describe('PeliculaAccionComponent', () => {
  let component: PeliculaAccionComponent;
  let fixture: ComponentFixture<PeliculaAccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaAccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaAccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
