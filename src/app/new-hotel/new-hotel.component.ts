import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable} from 'angularfire2';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-hotel',
  templateUrl: './new-hotel.component.html',
  styleUrls: ['./new-hotel.component.css']
})
export class NewHotelComponent implements OnInit {

  cities: FirebaseListObservable<any>;
  hotelForm: FormGroup;

  constructor(private fb: FormBuilder, private af: AngularFire, private router: Router) {
    this.hotelForm = this.fb.group({
      name: ['', Validators.required],
      cityId: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.cities = this.af.database.list('cities');
  }

  submit(hotel: any) {
    this.af.database.list('/hotels').push(hotel).then(() => {
      this.router.navigate(['hotels']);
    })
  }

}
