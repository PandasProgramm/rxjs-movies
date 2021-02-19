import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private readonly _title: BehaviorSubject<string>
  constructor() {
    this._title= new BehaviorSubject<string>('Home');
  }
  get title(): BehaviorSubject<string> {
    return this._title;
  }
}
