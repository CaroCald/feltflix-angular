import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriePresentacionComponent } from './serie-presentacion.component';

describe('SeriePresentacionComponent', () => {
  let component: SeriePresentacionComponent;
  let fixture: ComponentFixture<SeriePresentacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriePresentacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriePresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
