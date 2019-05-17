import { Component, OnInit } from '@angular/core';
// import { MovieService } from '../../services/movie.service';
import { MovieService } from '@services/movie.service';
import { UsersService } from '@services/users.service';

@Component({
  selector: 'movies-view',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Object = [];

  constructor(private movieService: MovieService, private userService: UsersService) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.movieService.list().then((res) => {
      this.movies = res;
      // console.log(res);
    });
    this.userService.list().then((res) => {
      console.log(res);
    });
  }

}
