import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Car } from '../models/car.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  public car: Car = {
      _id: "",
      make: "",
      model: "",
      price: "",
      year: "",
      km: "",
      show: false,
      images: []
  }

  private url = `${environment.apiURL}/cars`;

  constructor(private httpClient: HttpClient) { }

  public getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.url);
  }

  public getCarById(id: string): Observable<Car> {
    return this.httpClient.get<Car>(`${this.url}/${id}`);
  }

  public addCar(item: Car): Observable<any> {
    return this.httpClient.post<Car>(this.url, item, httpOptions);
  }

  public updateCar(item: Car): Observable<any> {
    return this.httpClient.put<Car>(`${this.url}/${item._id}`, item, httpOptions);
  }

  public deleteCar(id: string): Observable<Car> {
    return this.httpClient.delete<Car>(`${this.url}/${id}`);
  }

}
