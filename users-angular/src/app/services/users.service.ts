import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Users} from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  API_URI = '/assets/mock-data.json';

  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get<Users[]>(`${this.API_URI}`);
  }
}
