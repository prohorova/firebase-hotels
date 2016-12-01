import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-town',
  templateUrl: 'new-town.component.html',
  styleUrls: ['new-town.component.css']
})
export class NewTownComponent implements OnInit {

  cityForm: FormGroup;

  constructor(private fb: FormBuilder, private af: AngularFire, private router: Router) {
    this.cityForm = this.fb.group({
      name: ['', Validators.required],
      region: '',
      state: '',
      cityImage: '',
      shortDescription: '',
      longDescription: '',
      featured: false,
      deals: '',
      skylineImage: '',
      tagLine: ''
    });
  }

  ngOnInit() {
  }

  submit(city: any) {
    this.af.database.list('/cities').push(city).then(() => {
      this.router.navigate(['towns']);
    })
  }

}
