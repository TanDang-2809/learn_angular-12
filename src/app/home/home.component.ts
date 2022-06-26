import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //khai báo biến
  public name = 'Tan Dang';
  //2 phần tử trong mảng
  public traiCay = ['Cam', 'Táo', 'Xoài', 'Ổi'];
  constructor() {}

  public ngOnInit(): void {
    console.log('Các loại trái cây : ', this.traiCay);
  }

}
