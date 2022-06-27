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
  //Mảng districts 
  public districts: string[] = ['Quận huyện'];
  //Mảng chứa các tỉnh thành phố
  public vietNamData = [
    {city: 'Chọn thành phố', district: ['Quận huyện'] },
    {
      city: 'An Giang', 
      district: [
        "Thành phố Long Xuyên",
        "Thành phố Châu Đốc",
        "Thị xã Tân Châu",
        "Huyện An Phú",
        "Huyện Châu Phú",
        "Huyện Châu Thành",
        "Huyện Chợ Mới",
        "Huyện Phú Tân",
        "Huyện Thoại Sơn",
        "Huyện Tịnh Biên",
        "Huyện Tri Tôn"
          ],
        },
        {
          city: 'Bà Rịa - Vũng Tàu', 
          district: [
            "Thành phố Vũng Tàu",
            "Thị xã Bà Rịa",
            "Thị xã Phú Mỹ",
            "Huyện Châu Đức",
            "Huyện Côn Đảo",
            "Huyện Đất Đỏ",
            "Huyện Long Điền",
            "Huyện Tân Thành",
            "Huyện Xuyên Mộc"
         ],
        },
        {
          city: 'Bạc Liêu', 
          district: [
            "Thành phố Bạc Liêu",
            "Huyện Đông Hải",
            "Huyện Giá Rai",
            "Huyện Hòa Bình",
            "Huyện Hồng Dân",
            "Huyện Phước Long",
            "Huyện Vĩnh Lợi"
         ],
        },
        {
          city: 'Bắc Cạn', 
          district: [
            "Thị xã Bắc Kạn",
            "Huyện Ba Bể",
            "Huyện Bạch Thông",
            "Huyện Chợ Đồn",
            "Huyện Chợ Mới",
            "Huyện Na Rì",
            "Huyện Ngân Sơn",
            "Huyện Pác Nặm"
         ],
        },
      ];
  constructor() {}

  public ngOnInit(): void {
    console.log('Các loại trái cây =  ', this.traiCay);
    console.log('Chuỗi trái cây = ', this.traiCay2);
    console.log(this.vietNamData);
  }
  //function
  public changeCity(event : any) {
    //lấy một giá trị của một phần tử "city"
    const city = event.target.value;
    // console.log('event', city);
    //nếu không có city 
    //nếu có city thì chạy tiếp phần dưới
    if (!city) {
      return;
    }

    //cách 1
    //phần tử "city" trong "vietnamData" bằng với phần tử "city" mình chọn 
    // const search = this.vietNamData.filter((data) => data.city === city);
    // console.log('search', search);
    // nếu tìm có search và độ dài search lớn hơn 0
    // if (search && search.length > 0) {
    //   this.districts = search[0].district;
    // }

    //cách 2 
    // tìm thấy trong "vietNamData" có "city" bằng với "city" được chọn
    // nếu không tìm thấy gì thì trả về cái mảng rỗng
    // nếu tìm thấy thì trả về "district"
    //? nghĩa là có hay không.
    this.districts = this.vietNamData.find(data => data.city === city)?.district || [];
  }
}
