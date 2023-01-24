import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCalendarHeaderComponent } from './mat-calendar-header.component';

describe('MatCalendarHeaderComponent', () => {
  let component: MatCalendarHeaderComponent;
  let fixture: ComponentFixture<MatCalendarHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatCalendarHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatCalendarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
