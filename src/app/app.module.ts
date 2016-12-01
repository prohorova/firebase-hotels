import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TownsComponent } from './towns/towns.component';
import { NewTownComponent } from './new-town/new-town.component';
import { LoginComponent } from './login/login.component';
import { TownDetailsComponent } from './town-details/town-details.component';
import { HotelsComponent } from './hotels/hotels.component';
import { NewHotelComponent } from './new-hotel/new-hotel.component';

const firebaseConfig = {
  apiKey: "AIzaSyCKNZn6YzT_EqzrulHynNIz3Cfxm6pHi7o",
  authDomain: "hotels-f927a.firebaseapp.com",
  databaseURL: "https://hotels-f927a.firebaseio.com",
  storageBucket: "hotels-f927a.appspot.com",
  messagingSenderId: "766321298993"
};

const routes = [
  {path: '', component: LoginComponent},
  {path: 'towns', component: TownsComponent},
  {path: 'town', component: NewTownComponent},
  {path: 'town-details/:id', component: TownDetailsComponent},
  {path: 'hotels', component: HotelsComponent},
  {path: 'hotel', component: NewHotelComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TownsComponent,
    NewTownComponent,
    LoginComponent,
    TownDetailsComponent,
    HotelsComponent,
    NewHotelComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
