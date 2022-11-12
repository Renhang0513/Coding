import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieinfosComponent } from './movieinfos.component';

describe('MovieinfosComponent', () => {
  let component: MovieinfosComponent;
  let fixture: ComponentFixture<MovieinfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieinfosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieinfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
