import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@services/authentication.service';

@Component({
  selector: 'login-form-component',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent implements OnInit {
  user = {
    username: 'khkh',
    password: '123456',
  };

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
  }

  async login() {
    const res = await this.authenticationService.login(this.user);

    if (typeof res === 'string') {
      alert(res);
    } else if (res.MaLoaiNguoiDung === 'QuanTri') {
      this.router.navigate(['/admin/home']);
    }
  }

}
