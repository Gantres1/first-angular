import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  //public m:string = "123";

  constructor() {}
  
  ngOnInit(){
    //this.m = "1234";
    //console.log (this.m);
  }

  Ret(){
    //return this.m;
  }
}
