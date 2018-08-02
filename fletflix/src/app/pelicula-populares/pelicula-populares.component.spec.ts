import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaPopularesComponent } from './pelicula-populares.component';

describe('PeliculaPopularesComponent', () => {
  let component: PeliculaPopularesComponent;
  let fixture: ComponentFixture<PeliculaPopularesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaPopularesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaPopularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
