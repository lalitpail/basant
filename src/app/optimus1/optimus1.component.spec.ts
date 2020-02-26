import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Optimus1Component } from './optimus1.component';

describe('Optimus1Component', () => {
  let component: Optimus1Component;
  let fixture: ComponentFixture<Optimus1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Optimus1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Optimus1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
