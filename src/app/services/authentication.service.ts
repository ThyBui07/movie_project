import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

const BASE_URI = 'QuanLyNguoiDung';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService extends ApiService {
  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  login(user) {
    const { username, password } = user;
    return this.post(`${BASE_URI}/DangNhap?TaiKhoan=${username}&MatKhau=${password}`, {})
      .then((user) => {
        if (typeof user === 'object') {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      })
    ;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}