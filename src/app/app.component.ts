import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {DateAdapter} from "@angular/material/core";
import {MatCalendarHeaderService} from "../services/mat-calendar-header.service";
import {Subscription} from "rxjs";
import {MatCalendarHeaderComponent} from "./mat-calendar-header/mat-calendar-header.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'test';
  dateControl: FormControl<Date | null>;

  calendarHeader = MatCalendarHeaderComponent;

  prevSub: Subscription;
  nextSub: Subscription;

  lastEvent: { source: string, date: Date | null } = { source: '', date: null };

  constructor(private dateAdapter: DateAdapter<Date>,
              private calendarService: MatCalendarHeaderService) {}

  ngOnInit(): void {
    this.dateAdapter.getFirstDayOfWeek = () => 1;

    this.dateControl = new FormControl<Date | null>(null);

    this.prevSub = this.calendarService.previousMonthClick$
      .subscribe(event => this.previousMonthClick(event));

    this.nextSub = this.calendarService.nextMonthClick$
      .subscribe(event => this.nextMonthClick(event));
  }

  previousMonthClick(event: any) {
    this.lastEvent = {
      date: event,
      source: 'Previous Month is clicked'
    };
  }

  nextMonthClick(event: any) {
    this.lastEvent = {
      date: event,
      source: 'Next Month is clicked'
    };
  }

  monthSelect(event: any) {
    this.lastEvent = {
      date: event,
      source: 'Month is selected'
    };
  }

}
