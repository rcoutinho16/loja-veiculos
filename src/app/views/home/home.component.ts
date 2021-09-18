import { Component, OnInit } from '@angular/core';

import { CarsService } from 'src/app/services/cars.service';
import { Car } from 'src/app/models/car.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cars: Car[] = [];

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.cars = this.carsService.getCars();
  }

}