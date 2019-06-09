import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@services/authentication.service';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: any;
  navigations: Array<any> = [
    { text: 'Movies', url: '/movies' },
    { text: 'News', url: '/news' },
    { text: 'About', url: '/about' },
    { text: 'Contact', url: '/contact' }
  ];

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(user => this.currentUser = user);
  }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }

}
