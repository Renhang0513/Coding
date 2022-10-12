import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homework001Component } from './homework001.component';

describe('Homework001Component', () => {
  let component: Homework001Component;
  let fixture: ComponentFixture<Homework001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homework001Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homework001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
