import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends ApiService {
  list() {
    return this.get('QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01');
  }
}
