import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onSale'
})
export class OnSalePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    //Nếu giá trị của haGia là true thì 
    if (value) {
      //trả về dòng chữ Đang hạ giá!
      return 'Đang hạ giá!';
    }
    // ngược lại false thì trả về rỗng
    return '';
  }
}
