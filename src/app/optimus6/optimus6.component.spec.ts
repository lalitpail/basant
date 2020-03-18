import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Optimus6Component } from './optimus6.component';

describe('Optimus6Component', () => {
  let component: Optimus6Component;
  let fixture: ComponentFixture<Optimus6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Optimus6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Optimus6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
