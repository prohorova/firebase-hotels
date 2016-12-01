import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, AngularFire } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-towns',
  templateUrl: './towns.component.html',
  styleUrls: ['./towns.component.css']
})
export class TownsComponent implements OnInit {

  cities: FirebaseListObservable<any>;

  constructor(private af: AngularFire, private router: Router) {
    this.cities = this.af.database.list('/cities');
  }

  ngOnInit() {
  }

  goToDetails(city) {
    this.router.navigate([`town-details/${city.$key}`]);
  }

}
