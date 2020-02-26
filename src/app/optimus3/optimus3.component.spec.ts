import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Optimus3Component } from './optimus3.component';

describe('Optimus3Component', () => {
  let component: Optimus3Component;
  let fixture: ComponentFixture<Optimus3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Optimus3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Optimus3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
