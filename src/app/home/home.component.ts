import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  names:object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getGithubNames().subscribe(data =>{
      this.names = data
      console.log(this.names)
    })
  }

}