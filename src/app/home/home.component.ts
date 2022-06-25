import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //khai báo biến
  public name = 'Tan Dang';
  public age = 15;
  constructor() { 
   
  }

  ngOnInit(): void {
  }
  //hàm không trả về
  public resetName(): void {
    console.log('resetName');
    this.name = '';
  }
}
