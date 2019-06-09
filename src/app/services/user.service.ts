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

  roles() {
    return this.get(`${BASE_URI}/LayDanhSachLoaiNguoiDung`);
  }

  list() {
    return this.get(`${BASE_URI}/LayDanhSachNguoiDung?MaNhom=GP01`);
  }

  async getUserByUsername(username) {
    const users = await this.list();
    const foundUser = users.find(({ TaiKhoan }) => TaiKhoan === username);

    return foundUser;
  }

  update(user) {
    return this.post(`${BASE_URI}/CapNhatThongTin`, user);
  }

  deleteUser(username) {
    return this.delete(`${BASE_URI}/XoaNguoiDung?TaiKhoan=${username}`);
  }
}
