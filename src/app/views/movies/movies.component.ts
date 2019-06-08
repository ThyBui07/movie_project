import { Component, OnInit } from '@angular/core';
import { MovieService } from '@services/movie.service';

@Component({
  templateUrl: './movies.component.html',
})
export class MoviesComponent implements OnInit {
  movies: any = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.movieService.list().then((res) => {
      this.movies = res;
      console.log(res);
    });
  }

}
