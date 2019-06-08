import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

const BASE_URI = 'QuanLyNguoiDung';

@Injectable({
  providedIn: 'root',
})
export class UserService extends ApiService {
  signup(user) {
    return this.post(`${BASE_URI}/ThemNguoiDung`, user);
  }

  categories() {
    return this.get(`${BASE_URI}/LayDanhSachLoaiNguoiDung`);
  }

  list() {
    return this.get(`${BASE_URI}/LayDanhSachNguoiDung?MaNhom=GP01`);
  }

  update() {
    //
  }

  deleteUser() {
    //
  }
}
