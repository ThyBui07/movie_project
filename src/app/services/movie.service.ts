import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class MovieService extends ApiService {
  list() {
    return this.get('QuanLyPhim/LayDanhSachPhim?MaNhom=GP06');

    /* const res = await this.http.get("http://www.omdbapi.com/?y=2018&apikey=ba913717").toPromise();
    console.log(res);
    return res; */

    /* return this.http.get("http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP06")
      .toPromise()
      .then((abc) => {
        if (Array.isArray(abc)) {
          return 'toi la array';
        }
        return 'khong la array';
        // return abc;
      })
      .catch((err) => {
        return 'loi roi';
      })
    ; */
  }

  movieById(id) {
    const uri = `QuanLyPhim/LayChiTietPhim?MaPhim=${id}`;
    return this.get(uri);
  }

  seatById(id){
    const uri = `QuanLyPhim/ChiTietPhongVe?MaLichChieu=${id}`;
    return this.get(uri);
  }
}
