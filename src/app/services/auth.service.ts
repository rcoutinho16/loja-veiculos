import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = `${environment.apiURL}/auth`;

  constructor(private httpClient: HttpClient) { }

  public login(user: User): Observable<any> {
    return this.httpClient.post(`${this.url}/signin`, user, httpOptions);
  }

  public register(user: User): Observable<any> {
    return this.httpClient.post(`${this.url}/signup`, user, httpOptions);
  }
}
