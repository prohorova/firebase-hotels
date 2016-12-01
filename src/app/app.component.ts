import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: any;

  constructor(private af: AngularFire, private router: Router) {
    this.af.auth.subscribe(userData => {
      this.user = userData;
      if (userData) {
        this.router.navigate(['towns']);
      } else {
        this.router.navigate(['']);
      }
    })
  }

  logout() {
    this.af.auth.logout();
  }
}
