import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  // selector: 'home-view',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // sliderArray: Object = [ {img:'', name: ''} ];
  movies: any = [];
  sliders = [];
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getList();
  }

  getList(){
    this.movieService.list().then((res) => {
      // console.log(res);
      this.movies = res;
      this.movies.forEach((movie: { HinhAnh: string; TenPhim: string; }) =>{
        this.sliders.push({
          name: movie.TenPhim,
          backgroundImage: `url(${movie.HinhAnh})`, //nối chuỗi
          image: movie.HinhAnh,
        })
      });
      console.log(this.sliders);
    });
  }
}
