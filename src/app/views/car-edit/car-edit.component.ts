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
    id: 0,
    make: "",
    model: "",
    price: "0",
    year: "0",
    km: "0",
    show: false
  };

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private carService: CarsService) { }

  ngOnInit(): void {
    let id: number;
    this.currentId = this.activatedRoute.snapshot.paramMap.get('id');
    id = Number(this.currentId);

    this.car = this.carService.getCarById(id);
  }

  public cancel() {
    this.router.navigate(['/admin-cars']);
  }

  public edit(form: any) {
    this.carService.updateCar(this.car);
    this.router.navigate(['/admin-cars']);
  }

}
