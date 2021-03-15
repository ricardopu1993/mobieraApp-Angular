import { Injectable } from '@angular/core';
import { Users } from '../models/users';
import { TypeUsers } from '../models/type-users';
import { Information } from '../models/information';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonServerAPIService {

  url = "http://localhost:3000/";

  constructor(private http: HttpClient) {

  }

  public getUsers(){
    return this.http.get<Users[]>(
      this.url+"users"
    ); 
  }

  public getInfoUser(id: number){
    return this.http.get<Information>(
      this.url+"information/"+id
    ); 
  }

}
