import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CarsService } from 'src/app/services/cars.service';
import { Car } from 'src/app/models/car.model';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {

  public car: Car = {
    id: 0,
    make: "",
    model: "",
    price: "0",
    year: "0",
    km: "0",
    show: false
  };

  constructor(private router: Router,
              private carService: CarsService) { }

  ngOnInit(): void {
  }

  public create(form: any) {
    this.carService.addCar(this.car);
    this.router.navigate(['/admin-cars']);
  }

  public cancel() {
    this.router.navigate(['/admin-cars']);
  }

}
