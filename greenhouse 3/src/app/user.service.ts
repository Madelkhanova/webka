import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../assets/interfaces/User'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private httpHeaders = {
    headers: new HttpHeaders({ "Content-Type": "application/json"})
  }

  private _url = 'http://localhost:8000/api/'
  constructor(private http: HttpClient) { }

  login(user): Observable<User> {
    return this.http.post<User>(this._url+'login/', user, this.httpHeaders)
  }
  signup(user): Observable<User> {
    return this.http.post<User>(this._url+'register/', user, this.httpHeaders)
  }
  order(user, flower): Observable<User> {
    return this.http.post<User>(this._url+'order/', {...user, flower}, this.httpHeaders)
  }
}
