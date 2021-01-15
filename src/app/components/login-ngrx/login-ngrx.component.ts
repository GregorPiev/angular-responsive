import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-login-ngrx',
  templateUrl: './login-ngrx.component.html',
  styleUrls: ['./login-ngrx.component.css']
})
export class LoginNgrxComponent implements OnInit {
  username: string;
  password: string;

  // !Replace with store observables!
  loggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  username$: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  // !Replace with store observables!

  constructor() {
  }

  ngOnInit() {
  }

  doLogin() {
    // !Replace with store dispatch!
    this.loggedIn$.next(true);
    this.username$.next(this.username);
    // !Replace with store dispatch!
  }

  logout() {
    // !Replace with store dispatch!
    this.loggedIn$.next(false);
    this.username$.next(null);
    // !Replace with store dispatch!
  }
}
