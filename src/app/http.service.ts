import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getLocaleDayNames } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) {}

    getGithubNames(){
      return this.http.get()
    }
   
}
