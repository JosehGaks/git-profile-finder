import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getLocaleDayNames } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private username:string;
  private clientid = 'efba229516318213923e'
  private clientsecret = 'a92cca1f393f386d27353d723118c5a8e03325d6'

  constructor(
    private http: HttpClient
  ) {}

    getProfileInfo(){
      return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
      .map(res => res.json());
    }
  
    getProfileRepos(){
      return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
      .map(res => res.json());
    }
  
    updateProfile(username:string){
      this.username = username;
    }
   
}