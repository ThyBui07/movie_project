import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  name: String = 'cuong';
  navigations: Array<Object> = [
    { text: 'Movies', url: '/movies' },
    { text: 'News', url: '/news' },
    { text: 'About', url: '/about' },
    { text: 'Contact', url: '/contact' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
