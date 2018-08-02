import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaTerrorComponent } from './pelicula-terror.component';

describe('PeliculaTerrorComponent', () => {
  let component: PeliculaTerrorComponent;
  let fixture: ComponentFixture<PeliculaTerrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaTerrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaTerrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
