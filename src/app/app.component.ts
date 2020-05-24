import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Calculator';
  public num1:number;
  public num2:number;
  public num3:number;

  Dod(){
    this.num3=this.num1+this.num2;
  }
  Vid(){
    this.num3=this.num1-this.num2;
  }
  Mno(){
    this.num3=this.num1*this.num2;
  }
  Dil(){
    this.num3=this.num1/this.num2;
  }
}

