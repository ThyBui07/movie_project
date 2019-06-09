import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '@services/movie.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  seats: any = [];
  movie: Object = null;
  chosenSeats: any = [];
  totalPrice = 0;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    this.getSeatList();
  }

  async getSeatList() {
    /* const id = this.activatedRoute.snapshot.paramMap.get('id');

    const seatsRes = await this.movieService.seatById(id);
    this.seats = seatsRes.DanhSachGhe;
    console.log(this.seats);

    this.movie = await this.movieService.movieById(id); */

    /* await this.movieService.seatById(id).then((res: {DanhSachGhe: any}) => {
      console.log(res.DanhSachGhe);
      this.seats= res.DanhSachGhe;
    });
    await this.movieService.movieById(id).then((res) => {
      console.log(res);
      this.movie = res;
    }); */
  }

  onChooseSeat(seat) {
    const index = this.chosenSeats.findIndex((chosenSeat) => {
      return chosenSeat.MaGhe === seat.MaGhe;
    });
    if (index < 0) {
      this.chosenSeats.push(seat);
      this.totalPrice += seat.GiaVe;
    } else {
      this.chosenSeats.splice(index, 1);
      this.totalPrice -= seat.GiaVe;
    }
    console.log(this.chosenSeats);
  }
}
