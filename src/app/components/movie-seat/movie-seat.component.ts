import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'movie-seat-component',
  templateUrl: './movie-seat.component.html',
  styleUrls: ['./movie-seat.component.scss']
})
export class MovieSeatComponent implements OnInit {
  @Input()
  seat: any = null;

  @Output()
  seatClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  chooseSeat() {
    this.seat.isChosen = !this.seat.isChosen;

    /* const clone = {
      key: 'val',
      ...this.seat,
    }; */

    this.seatClicked.emit(this.seat);
  }
}
