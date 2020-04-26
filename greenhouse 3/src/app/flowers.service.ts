import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFlowers } from 'src/assets/interfaces/flowers';

@Injectable({
  providedIn: 'root'
})
export class FlowersService {
  private _url: string = "http://localhost:8000/api/flowers/"
  constructor(private http: HttpClient) { }

  private httpHeaders = {
    headers: new HttpHeaders({ "Content-Type": "application/json"})
  }

  getFlowers(): Observable<IFlowers[]> {
    return this.http.get<IFlowers[]>(this._url)
  }

  getFlower(id): Observable<IFlowers> {
    return this.http.get<IFlowers>(this._url + id + '/')
  }

  create(flower): Observable<IFlowers> {
    return this.http.post<IFlowers>(this._url, flower, this.httpHeaders)
  }

  setComment(comment, id): Observable<any> {
    return this.http.post<any>(this._url + 'comment/', {...comment, id}, this.httpHeaders)
  }

  getCommnet(): Observable<any[]> {
    return this.http.get<any[]>(this._url + 'comment/')
  }

  edit(flower): Observable<any> {
    return this.http.put<any>(this._url + 'admin/' + flower.id + '/', flower, this.httpHeaders)
  }

  delete(id): Observable<any> {
    return this.http.delete<any>(this._url + 'admin/' + id + '/')
  }
}
