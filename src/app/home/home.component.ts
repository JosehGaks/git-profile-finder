import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  profile:object;
  repos: object;
  username:string;

  constructor(private _http: HttpService) { }
  findProfile(){
  	this._http.updateProfile(this.username);
  	this._http.getProfileInfo().subscribe(profile => {
  		this.profile = profile;
  	});

  	this._http.getProfileRepos().subscribe(repos => {
  		console.log(repos);
  		this.repos = repos;
  	})  	
  }

  ngOnInit() {
    this.username="josehGaks"
    this._http.updateProfile(this.username);
  	this._http.getProfileInfo().subscribe(profile => {
  		console.log(profile);
  		this.profile = profile;
  	});

  	this._http.getProfileRepos().subscribe(repos => {
  		console.log(repos);
  		this.repos = repos;
  	}) 
    
  }

  searchFor(){
    
  }

}
