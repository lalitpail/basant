import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Optimus4Component } from './optimus4.component';

describe('Optimus4Component', () => {
  let component: Optimus4Component;
  let fixture: ComponentFixture<Optimus4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Optimus4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Optimus4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
