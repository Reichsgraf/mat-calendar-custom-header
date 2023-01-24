import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MatCalendarHeaderService {

  private _previousMonthClick = new Subject();
  private _nextMonthClick = new Subject();
  previousMonthClick$ = this._previousMonthClick.asObservable();
  nextMonthClick$ = this._nextMonthClick.asObservable();

  previousMonthClick(date: Date) {
    this._previousMonthClick.next(date);
  }

  nextMonthClick(date: Date) {
    this._nextMonthClick.next(date);
  }

}
