import { Component, OnInit } from '@angular/core';

import { CarsService } from 'src/app/services/cars.service';
import { Car } from 'src/app/models/car.model';

@Component({
  selector: 'app-admin-cars',
  templateUrl: './admin-cars.component.html',
  styleUrls: ['./admin-cars.component.css']
})
export class AdminCarsComponent implements OnInit {

  public cars: Car[] = [];

  constructor(private carService: CarsService) { }

  ngOnInit(): void {
    this.cars = this.carService.getCars();
  }

  public delete(id: number) {
    this.carService.deleteCar(id);
  }

}
