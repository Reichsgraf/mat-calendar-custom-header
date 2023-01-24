import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {MatCalendar} from "@angular/material/datepicker";
import {DateAdapter, MAT_DATE_FORMATS, MatDateFormats} from "@angular/material/core";
import {MatCalendarHeaderService} from "../../services/mat-calendar-header.service";
import {MatButtonModule} from "@angular/material/button";
import {A11yModule} from "@angular/cdk/a11y";
import {DatePipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-mat-calendar-header',
  standalone: true,
  templateUrl: './mat-calendar-header.component.html',
  imports: [
    MatButtonModule,
    A11yModule,
    DatePipe,
    NgIf
  ],
  styleUrls: ['./mat-calendar-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatCalendarHeaderComponent implements OnDestroy {

  private destroyed = new Subject<void>();

  constructor(private calendar: MatCalendar<any>,
              private dateAdapter: DateAdapter<any>,
              private headerService: MatCalendarHeaderService,
              @Inject(MAT_DATE_FORMATS) private dateFormats: MatDateFormats,
              private cdr: ChangeDetectorRef) {
    calendar.stateChanges
      .pipe(takeUntil(this.destroyed))
      .subscribe(() => cdr.markForCheck());
  }

  get label() {
    return this.calendar.activeDate;
  }

  get isMonthView() {
    return this.calendar.currentView === 'month';
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  currentPeriodClicked(): void {
    this.calendar.currentView = this.calendar.currentView === 'month' ? 'multi-year' : 'month';
  }

  previousClicked() {
    this.calendar.activeDate = this.calendar.currentView === 'month'
      ? this.dateAdapter.addCalendarMonths(this.calendar.activeDate, -1)
      : this.dateAdapter.addCalendarYears(this.calendar.activeDate, -1);
    if (this.calendar.currentView === 'month') {
      this.headerService.previousMonthClick(this.calendar.activeDate);
    }
  }

  nextClicked() {
    this.calendar.activeDate = this.calendar.currentView === 'month'
      ? this.dateAdapter.addCalendarMonths(this.calendar.activeDate, 1)
      : this.dateAdapter.addCalendarYears(this.calendar.activeDate, 1);
    if (this.calendar.currentView === 'month') {
      this.headerService.nextMonthClick(this.calendar.activeDate);
    }
  }

}
