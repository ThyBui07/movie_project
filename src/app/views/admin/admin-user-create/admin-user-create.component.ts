import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@services/user.service';

@Component({
  templateUrl: './admin-user-create.component.html',
})
export class AdminUserCreateComponent implements OnInit {
  errorMessage = '';
  user = {
    TaiKhoan: '',
    MatKhau: '',
    HoTen: '',
    Email: '',
    SoDT: '',
    MaNhom: 'GP01',
    MaLoaiNguoiDung: 'KhachHang',
  };

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  async createUser() {
    const res = await this.userService.signup(this.user);
    if (typeof res === 'string') {
      this.errorMessage = res;
    } else {
      this.errorMessage = '';
      this.router.navigate(['/admin/users']);
    }
  }
}
