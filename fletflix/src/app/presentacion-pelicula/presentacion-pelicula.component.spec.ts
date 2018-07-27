import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentacionPeliculaComponent } from './presentacion-pelicula.component';

describe('PresentacionPeliculaComponent', () => {
  let component: PresentacionPeliculaComponent;
  let fixture: ComponentFixture<PresentacionPeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentacionPeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentacionPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
