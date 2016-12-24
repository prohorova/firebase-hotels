import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, AngularFire } from 'angularfire2';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  hotels: Observable<any>;

  constructor(private af: AngularFire, private router: Router) {
    this.hotels = this.af.database.list('/hotels').map(items => {
      return items.map(item => {
        item.city = this.af.database.object(`/cities/${item['cityId']}`);
        return item;
      })
    });
  }

  ngOnInit() {
  }

  goToDetails(hotel) {
    this.router.navigate([`hotel-details/${hotel.$key}`]);
  }

}
