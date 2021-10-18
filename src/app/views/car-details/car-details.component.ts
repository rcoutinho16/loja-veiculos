import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CarsService } from 'src/app/services/cars.service';
import { Car } from 'src/app/models/car.model';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  public currentId: any;

  public car: Car = {
    _id: "",
    make: "",
    model: "",
    price: "0",
    year: "0",
    km: "0",
    show: false,
    images: []
  };

  constructor(private activatedRoute: ActivatedRoute,
              private carService: CarsService) { }

  ngOnInit(): void {
    this.currentId = this.activatedRoute.snapshot.paramMap.get('id');
    this.carService.getCarById(this.currentId).subscribe((response: Car) => {
      this.car = response;
    });
  }

}
