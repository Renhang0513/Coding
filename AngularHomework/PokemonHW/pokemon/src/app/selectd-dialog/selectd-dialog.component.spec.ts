import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectdDialogComponent } from './selectd-dialog.component';

describe('SelectdDialogComponent', () => {
  let component: SelectdDialogComponent;
  let fixture: ComponentFixture<SelectdDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectdDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectdDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
