import { Injectable } from '@angular/core';import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Dealership } from '../models/dealership.model';

@Injectable({
  providedIn: 'root'
})
export class DealershipService {

  private url = `${environment.apiURL}/dealership`;

  constructor(private httpClient: HttpClient) { }

  public getDealership(): Observable<Dealership>{
    return this.httpClient.get<Dealership>(this.url);
  }

  public updateDealership(itemUpdate: Dealership): Observable<any> {
    return this.httpClient.put<Dealership>(`${this.url}/${itemUpdate._id}`, itemUpdate);
  }
}
