import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: any = [];
  sliders = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getList();
  }

  getList(){
    this.movieService.list().then((res) => {
      this.movies = res;
      console.log(res);
      this.movies.forEach((movie: { HinhAnh: string; TenPhim: string; MaPhim: string; }) =>{
        this.sliders.push({
          name: movie.TenPhim,
          backgroundImage: `url(${movie.HinhAnh})`, //nối chuỗi
          image: movie.HinhAnh,
          code: movie.MaPhim,
        })
      });
      console.log(this.sliders);
    });
  }
}
