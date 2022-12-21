import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikepageComponent } from './likepage.component';

describe('LikepageComponent', () => {
  let component: LikepageComponent;
  let fixture: ComponentFixture<LikepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
