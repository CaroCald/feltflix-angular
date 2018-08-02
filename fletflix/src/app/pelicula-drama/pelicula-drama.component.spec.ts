import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaDramaComponent } from './pelicula-drama.component';

describe('PeliculaDramaComponent', () => {
  let component: PeliculaDramaComponent;
  let fixture: ComponentFixture<PeliculaDramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaDramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaDramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
