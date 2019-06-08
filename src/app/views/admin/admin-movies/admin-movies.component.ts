import { Component, OnInit } from '@angular/core';
import { MovieService } from '@services/movie.service';

@Component({
  templateUrl: './admin-movies.component.html',
})
export class AdminMoviesComponent implements OnInit {
  movies = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.loadMovies();
  }

  async loadMovies() {
    this.movies = await this.movieService.list();
    console.log(this.movies);
  }

  async delete(movie) {
    if (!confirm(`Are you sure you want to delete ${movie.TenPhim}?`)) {
      return;
    }

    /* Delete at Backend */
    await this.movieService.deleteMovie(movie.MaPhim);

    /* Delete at Frontend */
    const index = this.movies.findIndex(({ MaPhim }) => MaPhim === movie.MaPhim);
    this.movies.splice(index, 1);
  }

}
