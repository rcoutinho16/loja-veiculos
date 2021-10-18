import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { CarsService } from 'src/app/services/cars.service';
import { Car } from 'src/app/models/car.model';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {

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

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private carService: CarsService) { }

  ngOnInit(): void {
    this.currentId = this.activatedRoute.snapshot.paramMap.get('id');
    this.carService.getCarById(this.currentId).subscribe((response: Car) => {
      this.car = response;
      console.log(this.car);
    });
  }

  public cancel() {
    this.router.navigate(['/admin-cars']);
  }

  public edit(form: any) {
    this.carService.updateCar(this.car).subscribe((response) => {
      this.router.navigate(['/admin-cars']);
    });
  }

}
