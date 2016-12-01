import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, AngularFire } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  hotels: FirebaseListObservable<any>;

  constructor(private af: AngularFire, private router: Router) {
    this.hotels = this.af.database.list('/hotels');
  }

  ngOnInit() {
  }

  goToDetails(hotel) {
    this.router.navigate([`hotel-details/${hotel.$key}`]);
  }

}
