import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFlowers } from 'src/assets/interfaces/flowers';

@Injectable({
  providedIn: 'root'
})
export class FlowersService {
  private _url: string = "assets/data/flowers.json"
  constructor(private http: HttpClient) { }

  getFlowers(): Observable<IFlowers[]> {
    return this.http.get<IFlowers[]>(this._url)
  }

  create(flower): Observable<IFlowers> {
    return this.http.post<IFlowers>(this._url, flower, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    })
  }
}
