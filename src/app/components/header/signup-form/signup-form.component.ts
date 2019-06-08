import { Component, OnInit } from '@angular/core';
import { UserService } from '@services/user.service';
import { AuthenticationService } from '@services/authentication.service';

@Component({
  selector: 'signup-form-component',
  templateUrl: './signup-form.component.html',
})
export class SignupFormComponent implements OnInit {
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
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  async signup() {
    const res = await this.userService.signup(this.user);

    if (typeof res === 'string') {
      alert(res);
    } else {
      const { TaiKhoan, MatKhau } = res;
      await this.authenticationService.login({
        username: TaiKhoan,
        password: MatKhau,
      });
    }
  }

}
