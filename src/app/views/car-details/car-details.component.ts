import { Component, OnInit } from '@angular/core';

import { Car } from 'src/app/models/car.model';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  public car: Car = {
    id: 0,
    make: "",
    model: "",
    price: "0",
    year: "0",
    km: "0",
    show: false
  };

  constructor() { }

  ngOnInit(): void {
  }

}
