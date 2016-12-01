import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-town-details',
  templateUrl: './town-details.component.html',
  styleUrls: ['./town-details.component.css']
})
export class TownDetailsComponent implements OnInit {

  city: FirebaseObjectObservable<any>;
  hotels: FirebaseListObservable<any>;

  constructor(private route: ActivatedRoute, private af: AngularFire) {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      this.city = this.af.database.object(`/cities/${id}`);
      this.hotels = this.af.database.list('/hotels', {query: {
        orderByChild: 'cityId',
        equalTo: id
      }});
    })
  }

  ngOnInit() {
  }

}
