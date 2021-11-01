import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public user: User = {
    _id: "",
    username: "",
    email: "",
    password: "",
    roles: [],
    accessToken: ""
  };

  private url = `${environment.apiURL}/users`;

  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }

  public getUserById(id: string): Observable<User> {
    return this.httpClient.get<User>(`${this.url}/${id}`);
  }

  public updateCar(item: User): Observable<any> {
    return this.httpClient.put<User>(`${this.url}/${item._id}`, item, httpOptions);
  }

  public deleteCar(id: string): Observable<User> {
    return this.httpClient.delete<User>(`${this.url}/${id}`);
  }
}
