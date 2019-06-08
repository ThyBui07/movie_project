import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '@services/user.service';

@Component({
  templateUrl: './admin-user-edit.component.html',
})
export class AdminUserEditComponent implements OnInit {
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
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUser();
  }

  async getUser() {
    const username = this.activatedRoute.snapshot.paramMap.get('username');
    this.user = await this.userService.getUserByUsername(username);
  }

  async updateUser() {
    await this.userService.update(this.user);
    this.router.navigate(['/admin/users']);
  }

}
