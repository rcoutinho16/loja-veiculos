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
      show: false,
      images: []
  }

  public carsList: Array<Car> = [
    {
      id: 0,
      make: "Volkswagen",
      model: "Gol",
      price: "10000",
      year: "2010",
      km: "10000",
      show: false,
      images: [
        {
          src: '../../../assets/0.jpg'
        },
        {
          src: '../../../assets/1.jpg'
        },
        {
          src: '../../../assets/2.jpg'
        },
        {
          src: '../../../assets/3.jpg'
        },
        {
          src: '../../../assets/4.jpg'
        },
        {
          src: '../../../assets/5.jpg'
        },
        {
          src: '../../../assets/6.jpg'
        },
        {
          src: '../../../assets/7.jpg'
        },
        {
          src: '../../../assets/8.jpg'
        },
        {
          src: '../../../assets/9.jpg'
        }
      ]
    },
    {
      id: 1,
      make: "Volkswagen",
      model: "Gol 1",
      price: "10000",
      year: "2010",
      km: "10000",
      show: false,
      images: [
        {
          src: '../../../assets/0.jpg'
        },
        {
          src: '../../../assets/1.jpg'
        },
        {
          src: '../../../assets/2.jpg'
        },
        {
          src: '../../../assets/3.jpg'
        },
        {
          src: '../../../assets/4.jpg'
        },
        {
          src: '../../../assets/5.jpg'
        },
        {
          src: '../../../assets/6.jpg'
        },
        {
          src: '../../../assets/7.jpg'
        },
        {
          src: '../../../assets/8.jpg'
        },
        {
          src: '../../../assets/9.jpg'
        }
      ]
    },
    {
      id: 2,
      make: "Volkswagen",
      model: "Gol 2",
      price: "10000",
      year: "2010",
      km: "10000",
      show: false,
      images: [
        {
          src: '../../../assets/0.jpg'
        },
        {
          src: '../../../assets/1.jpg'
        },
        {
          src: '../../../assets/2.jpg'
        },
        {
          src: '../../../assets/3.jpg'
        },
        {
          src: '../../../assets/4.jpg'
        },
        {
          src: '../../../assets/5.jpg'
        },
        {
          src: '../../../assets/6.jpg'
        },
        {
          src: '../../../assets/7.jpg'
        },
        {
          src: '../../../assets/8.jpg'
        },
        {
          src: '../../../assets/9.jpg'
        }
      ]
    },
    {
      id: 3,
      make: "Volkswagen",
      model: "Gol 3",
      price: "10000",
      year: "2010",
      km: "10000",
      show: false,
      images: [
        {
          src: '../../../assets/0.jpg'
        },
        {
          src: '../../../assets/1.jpg'
        },
        {
          src: '../../../assets/2.jpg'
        },
        {
          src: '../../../assets/3.jpg'
        },
        {
          src: '../../../assets/4.jpg'
        },
        {
          src: '../../../assets/5.jpg'
        },
        {
          src: '../../../assets/6.jpg'
        },
        {
          src: '../../../assets/7.jpg'
        },
        {
          src: '../../../assets/8.jpg'
        },
        {
          src: '../../../assets/9.jpg'
        }
      ]
    },
    {
      id: 4,
      make: "Volkswagen",
      model: "Gol 4",
      price: "10000",
      year: "2010",
      km: "10000",
      show: false,
      images: [
        {
          src: '../../../assets/0.jpg'
        },
        {
          src: '../../../assets/1.jpg'
        },
        {
          src: '../../../assets/2.jpg'
        },
        {
          src: '../../../assets/3.jpg'
        },
        {
          src: '../../../assets/4.jpg'
        },
        {
          src: '../../../assets/5.jpg'
        },
        {
          src: '../../../assets/6.jpg'
        },
        {
          src: '../../../assets/7.jpg'
        },
        {
          src: '../../../assets/8.jpg'
        },
        {
          src: '../../../assets/9.jpg'
        },
      ]
    },
    {
      id: 5,
      make: "Volkswagen",
      model: "Gol 5",
      price: "10000",
      year: "2010",
      km: "10000",
      show: false,
      images: [
        {
          src: '../../../assets/0.jpg'
        },
        {
          src: '../../../assets/1.jpg'
        },
        {
          src: '../../../assets/2.jpg'
        },
        {
          src: '../../../assets/3.jpg'
        },
        {
          src: '../../../assets/4.jpg'
        },
        {
          src: '../../../assets/5.jpg'
        },
        {
          src: '../../../assets/6.jpg'
        },
        {
          src: '../../../assets/7.jpg'
        },
        {
          src: '../../../assets/8.jpg'
        },
        {
          src: '../../../assets/9.jpg'
        }
      ]
    },
    {
      id: 6,
      make: "Volkswagen",
      model: "Gol 6",
      price: "10000",
      year: "2010",
      km: "10000",
      show: false,
      images: [
        {
          src: '../../../assets/0.jpg'
        },
        {
          src: '../../../assets/1.jpg'
        },
        {
          src: '../../../assets/2.jpg'
        },
        {
          src: '../../../assets/3.jpg'
        },
        {
          src: '../../../assets/4.jpg'
        },
        {
          src: '../../../assets/5.jpg'
        },
        {
          src: '../../../assets/6.jpg'
        },
        {
          src: '../../../assets/7.jpg'
        },
        {
          src: '../../../assets/8.jpg'
        },
        {
          src: '../../../assets/9.jpg'
        }
      ]
    },
    {
      id: 7,
      make: "Volkswagen",
      model: "Gol 7",
      price: "10000",
      year: "2010",
      km: "10000",
      show: false,
      images: [
        {
          src: '../../../assets/0.jpg'
        },
        {
          src: '../../../assets/1.jpg'
        },
        {
          src: '../../../assets/2.jpg'
        },
        {
          src: '../../../assets/3.jpg'
        },
        {
          src: '../../../assets/4.jpg'
        },
        {
          src: '../../../assets/5.jpg'
        },
        {
          src: '../../../assets/6.jpg'
        },
        {
          src: '../../../assets/7.jpg'
        },
        {
          src: '../../../assets/8.jpg'
        },
        {
          src: '../../../assets/9.jpg'
        }
      ]
    },
    {
      id: 8,
      make: "Volkswagen",
      model: "Gol 8",
      price: "10000",
      year: "2010",
      km: "10000",
      show: false,
      images: [
        {
          src: '../../../assets/0.jpg'
        },
        {
          src: '../../../assets/1.jpg'
        },
        {
          src: '../../../assets/2.jpg'
        },
        {
          src: '../../../assets/3.jpg'
        },
        {
          src: '../../../assets/4.jpg'
        },
        {
          src: '../../../assets/5.jpg'
        },
        {
          src: '../../../assets/6.jpg'
        },
        {
          src: '../../../assets/7.jpg'
        },
        {
          src: '../../../assets/8.jpg'
        },
        {
          src: '../../../assets/9.jpg'
        }
      ]
    },
    {
      id: 9,
      make: "Volkswagen",
      model: "Gol 9",
      price: "10000",
      year: "2010",
      km: "10000",
      show: false,
      images: [
        {
          src: '../../../assets/0.jpg'
        },
        {
          src: '../../../assets/1.jpg'
        },
        {
          src: '../../../assets/2.jpg'
        },
        {
          src: '../../../assets/3.jpg'
        },
        {
          src: '../../../assets/4.jpg'
        },
        {
          src: '../../../assets/5.jpg'
        },
        {
          src: '../../../assets/6.jpg'
        },
        {
          src: '../../../assets/7.jpg'
        },
        {
          src: '../../../assets/8.jpg'
        },
        {
          src: '../../../assets/9.jpg'
        }
      ]
    },
    {
      id: 10,
      make: "Volkswagen",
      model: "Gol 10",
      price: "10000",
      year: "2010",
      km: "10000",
      show: false,
      images: [
        {
          src: '../../../assets/0.jpg'
        },
        {
          src: '../../../assets/1.jpg'
        },
        {
          src: '../../../assets/2.jpg'
        },
        {
          src: '../../../assets/3.jpg'
        },
        {
          src: '../../../assets/4.jpg'
        },
        {
          src: '../../../assets/5.jpg'
        },
        {
          src: '../../../assets/6.jpg'
        },
        {
          src: '../../../assets/7.jpg'
        },
        {
          src: '../../../assets/8.jpg'
        },
        {
          src: '../../../assets/9.jpg'
        }
      ]
    },
    {
      id: 11,
      make: "Volkswagen",
      model: "Gol 11",
      price: "10000",
      year: "2010",
      km: "10000",
      show: false,
      images: [
        {
          src: '../../../assets/0.jpg'
        },
        {
          src: '../../../assets/1.jpg'
        },
        {
          src: '../../../assets/2.jpg'
        },
        {
          src: '../../../assets/3.jpg'
        },
        {
          src: '../../../assets/4.jpg'
        },
        {
          src: '../../../assets/5.jpg'
        },
        {
          src: '../../../assets/6.jpg'
        },
        {
          src: '../../../assets/7.jpg'
        },
        {
          src: '../../../assets/8.jpg'
        },
        {
          src: '../../../assets/9.jpg'
        }
      ]
    },
    {
      id: 12,
      make: "Volkswagen",
      model: "Gol 12",
      price: "10000",
      year: "2010",
      km: "10000",
      show: false,
      images: [
        {
          src: '../../../assets/0.jpg'
        },
        {
          src: '../../../assets/1.jpg'
        },
        {
          src: '../../../assets/2.jpg'
        },
        {
          src: '../../../assets/3.jpg'
        },
        {
          src: '../../../assets/4.jpg'
        },
        {
          src: '../../../assets/5.jpg'
        },
        {
          src: '../../../assets/6.jpg'
        },
        {
          src: '../../../assets/7.jpg'
        },
        {
          src: '../../../assets/8.jpg'
        },
        {
          src: '../../../assets/9.jpg'
        }
      ]
    },
    {
      id: 13,
      make: "Volkswagen",
      model: "Gol 13",
      price: "10000",
      year: "2010",
      km: "10000",
      show: false,
      images: [
        {
          src: '../../../assets/0.jpg'
        },
        {
          src: '../../../assets/1.jpg'
        },
        {
          src: '../../../assets/2.jpg'
        },
        {
          src: '../../../assets/3.jpg'
        },
        {
          src: '../../../assets/4.jpg'
        },
        {
          src: '../../../assets/5.jpg'
        },
        {
          src: '../../../assets/6.jpg'
        },
        {
          src: '../../../assets/7.jpg'
        },
        {
          src: '../../../assets/8.jpg'
        },
        {
          src: '../../../assets/9.jpg'
        }
      ]
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
