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
  //Mảng gồm 2 Object
  public traiCay2 = [
    {ten : 'Táo', gia : 12, haGia : true},
    {ten : 'Nho', gia : -13, haGia : false},
    {ten : 'Cam', gia : 22.22, haGia : true},
    {ten : 'Sầu riêng', gia : 33.33, haGia : false}
  ];
  constructor() {}

  public ngOnInit(): void {
    console.log('Các loại trái cây =  ', this.traiCay);
    console.log('Chuỗi trái cây = ', this.traiCay2);
  }

}
