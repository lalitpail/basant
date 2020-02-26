import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Optimus2Component } from './optimus2.component';

describe('Optimus2Component', () => {
  let component: Optimus2Component;
  let fixture: ComponentFixture<Optimus2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Optimus2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Optimus2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
