import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  viewfriend=()=>
  {
    return this.http.get("https://dummyapifriends.herokuapp.com/view")
  }
}
