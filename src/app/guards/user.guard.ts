import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '@services/authentication.service';

@Injectable({ providedIn: 'root' })
export class UserGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    if (!currentUser || currentUser.MaLoaiNguoiDung === 'KhachHang') {
      return true;
    }

    this.router.navigate(['/admin/home'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}