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
      return this.http.get('https://api.github.com/users/?access_token=+f9688f62bffff9402e4311a7e0a8807c30c8a837')
    }
   
}
