import { Component, OnInit } from '@angular/core';

import { Car } from 'src/app/models/car.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cars: Car[] = [];

  constructor() { }

  ngOnInit(): void {
    
    this.cars = [
      {
        "id": 1,
        "make": "Volvo1",
        "model": "Volvo1",
        "price": "10000",
        "year": "2010",
        "km": "10000",
        "show": false
      },
      {
        "id": 2,
        "make": "Volvo2",
        "model": "Volvo2",
        "price": "10000",
        "year": "2010",
        "km": "10000",
        "show": false
      },
      {
        "id": 3,
        "make": "Volvo3",
        "model": "Volvo3",
        "price": "10000",
        "year": "2010",
        "km": "10000",
        "show": false
      },
      {
        "id": 4,
        "make": "Volvo4",
        "model": "Volvo4",
        "price": "10000",
        "year": "2010",
        "km": "10000",
        "show": false
      },
      {
        "id": 5,
        "make": "Volvo5",
        "model": "Volvo5",
        "price": "10000",
        "year": "2010",
        "km": "10000",
        "show": false
      },
      {
        "id": 6,
        "make": "Volvo6",
        "model": "Volvo6",
        "price": "10000",
        "year": "2010",
        "km": "10000",
        "show": false
      },
      {
        "id": 7,
        "make": "Volvo7",
        "model": "Volvo7",
        "price": "10000",
        "year": "2010",
        "km": "10000",
        "show": false
      },
      {
        "id": 8,
        "make": "Volvo8",
        "model": "Volvo8",
        "price": "10000",
        "year": "2010",
        "km": "10000",
        "show": false
      }
    ];
  }

}