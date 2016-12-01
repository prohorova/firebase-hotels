/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewTownComponent } from './new-town.component';

describe('NewTownComponent', () => {
  let component: NewTownComponent;
  let fixture: ComponentFixture<NewTownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
