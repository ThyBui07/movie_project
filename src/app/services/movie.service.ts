import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

const BASE_URI = 'QuanLyPhim';

@Injectable({
  providedIn: 'root',
})
export class MovieService extends ApiService {
  list() {
    return this.get(`${BASE_URI}/LayDanhSachPhim?MaNhom=GP06`);

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
    const uri = `${BASE_URI}/LayChiTietPhim?MaPhim=${id}`;
    return this.get(uri);
  }

  seatById(id){
    const uri = `${BASE_URI}/ChiTietPhongVe?MaLichChieu=${id}`;
    return this.get(uri);
  }

  create(movie) {
    return this.post(`${BASE_URI}/ThemPhimMoi`, movie);
  }

  update(movie) {
    return this.post(`${BASE_URI}/CapNhatPhim`, movie);
  }

  uploadFile(file, movieName) {
    const formData = new FormData();
    formData.append('Files', file);
    formData.append('TenPhim', movieName);

    return this.post(`${BASE_URI}/UploadFile`, formData);
  }

  deleteMovie(id) {
    return this.delete(`${BASE_URI}/XoaPhim?MaPhim=${id}`);
  }
}
