import { Injectable } from '@angular/core';

import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  public car: Car = {
      id: 0,
      make: "",
      model: "",
      price: "",
      year: "",
      km: "",
      show: false
  }

  public carsList: Array<Car> = [
    {
      id: 0,
      make: "Volvo1",
      model: "Volvo1",
      price: "10000",
      year: "2010",
      km: "10000",
      show: false
    },
    {
      id: 1,
      make: "Volvo2",
      model: "Volvo2",
      price: "10000",
      year: "2010",
      km: "10000",
      show: false
    },
    {
      id: 2,
      make: "Volvo3",
      model: "Volvo3",
      price: "10000",
      year: "2010",
      km: "10000",
      show: false
    },
    {
      id: 3,
      make: "Volvo4",
      model: "Volvo4",
      price: "10000",
      year: "2010",
      km: "10000",
      show: false
    },
    {
      id: 4,
      make: "Volvo5",
      model: "Volvo5",
      price: "10000",
      year: "2010",
      km: "10000",
      show: false
    },
    {
      id: 5,
      make: "Volvo6",
      model: "Volvo6",
      price: "10000",
      year: "2010",
      km: "10000",
      show: false
    },
    {
      id: 6,
      make: "Volvo7",
      model: "Volvo7",
      price: "10000",
      year: "2010",
      km: "10000",
      show: false
    },
    {
      id: 7,
      make: "Volvo8",
      model: "Volvo8",
      price: "10000",
      year: "2010",
      km: "10000",
      show: false
    }
  ];

  constructor() { }

  public getCars(): Car[] {
    return this.carsList;
  }

  public getCarById(id: number): Car {
    for (let obj of this.carsList) {
      if (obj.id === id) {
        console.log(obj);
        return obj;
      }
    }
    
    return this.car;
  }

  public addCar(item: Car): any {
    if (item.model) {
      item.id = this.carsList.length;
      this.carsList.push(item);
    }
  }

  public updateCar(item: Car): any {
    for(let obj of this.carsList) {
      if (obj.id === item.id) {
        obj.make = item.make;
        obj.model = item.model;
        obj.price = item.price;
        obj.year = item.year;
        obj.km = item.km;
        obj.show = item.show;
        break;
      }
    }
  }

  public deleteCar(id: number) {
    let posicao = null;

    if (id || id === 0) {
      for (let i= 0; i < this.carsList.length; i++) {
        if (id === this.carsList[i].id) {
          posicao = i;
          break;
        }
      }

      if (posicao || posicao === 0) {
        this.carsList.splice(posicao, 1);
      }
    }
  }

}
