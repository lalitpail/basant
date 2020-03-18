import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Optimus5Component } from './optimus5.component';

describe('Optimus5Component', () => {
  let component: Optimus5Component;
  let fixture: ComponentFixture<Optimus5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Optimus5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Optimus5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
