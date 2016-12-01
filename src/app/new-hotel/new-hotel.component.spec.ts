/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewHotelComponent } from './new-hotel.component';

describe('NewHotelComponent', () => {
  let component: NewHotelComponent;
  let fixture: ComponentFixture<NewHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
