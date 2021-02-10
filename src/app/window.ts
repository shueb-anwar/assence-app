import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, fromEvent } from 'rxjs';
import { pluck, distinctUntilChanged, map } from 'rxjs/operators';

function _window(): any {
  // return the global native browser window object
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class BrowserWindow {
  get nativeWindow(): any {
    return _window();
  }

  width$: Observable<number>;
  height$: Observable<number>;

  constructor() {
    let winSize$ = new BehaviorSubject(getWindowSize());

    this.height$ = (winSize$.pipe(pluck('height')) as Observable<number>).pipe(distinctUntilChanged());
    this.width$ = (winSize$.pipe(pluck('width')) as Observable<number>).pipe(distinctUntilChanged());

    fromEvent(window, 'resize').pipe(map(getWindowSize)).subscribe(winSize$);
  }
}

function getWindowSize() {
  return {
    height: _window().innerHeight,
    width: _window().innerWidth
  };
}
