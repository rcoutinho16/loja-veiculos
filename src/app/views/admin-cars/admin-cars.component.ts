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
    this.carService.getCars().subscribe((response: Car[]) => {
      this.cars = response;
  });
  }

  public delete(id: string) {
    this.carService.deleteCar(id).subscribe((response) => {
      this.carService.getCars().subscribe((response2: Car[]) => {
        this.cars = response2;
      });
    });
  }

}
