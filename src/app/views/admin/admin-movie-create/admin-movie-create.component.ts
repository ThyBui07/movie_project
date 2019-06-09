import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '@services/movie.service';

@Component({
  templateUrl: './admin-movie-create.component.html',
})
export class AdminMovieCreateComponent implements OnInit {
  errorMessage = '';
  movie: any = {
    TenPhim: '',
    HinhAnh: '',
    MoTa: '',
    NgayKhoiChieu: '',
    Trailer: '',
    MaNhom: 'GP06',
  };

  constructor(
    private router: Router,
    private movieService: MovieService
  ) { }

  ngOnInit() {
  }

  async createMovie() {
    await this.movieService.create(this.movie);
    this.router.navigate(['/admin/movies']);
  }
}
