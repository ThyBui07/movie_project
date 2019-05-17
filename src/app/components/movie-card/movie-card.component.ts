import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'movie-card-component',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input()
  movie: Object = {};

  constructor() { }

  ngOnInit() {
  }

}
