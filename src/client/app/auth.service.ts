import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NextObserver } from 'rxjs/Observer';


/** Declare external FB sdk library for Typescript to be aware of. */
declare var FB: any;

@Injectable()
export class AuthService {
  
  /** User's present login status. */
  isLoggedIn: boolean = false;

  /** Login through facebook. Returns observable for caller to act upon. */
  login(): Observable<boolean> {
    let authService = this;
    return Observable.create(
      (observer: NextObserver<boolean>) => {
        FB.login((response: any) => {
          authService.isLoggedIn = response.status === 'connected';
          observer.next(<boolean>authService.isLoggedIn);
          observer.complete;
        });
      }
      );
  }

  /** Logout through facebook. Returns observable for caller to act upon.  */
  logout(): Observable<boolean> {
    let authService = this;
    return Observable.create(
      (observer: NextObserver<boolean>) => {
        FB.logout((response: any) => {
          authService.isLoggedIn = response.status === 'connected';
          observer.next(<boolean>authService.isLoggedIn);
          observer.complete;
        });
      }
      );
  }

}