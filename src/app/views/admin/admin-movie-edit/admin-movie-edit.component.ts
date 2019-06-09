import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '@services/movie.service';

@Component({
  templateUrl: './admin-movie-edit.component.html',
})
export class AdminMovieEditComponent implements OnInit {
  errorMessage = '';
  movie: any = {
    TenPhim: '',
    // HinhAnh: '',
    MoTa: '',
    NgayKhoiChieu: '',
    Trailer: '',
    MaNhom: 'GP06',
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.getMovie();
  }

  async getMovie() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    const movie = await this.movieService.movieById(id);
    if (movie.NgayKhoiChieu) {
      movie.NgayKhoiChieu = movie.NgayKhoiChieu.slice(0, 10);
    }
    this.movie = movie;
  }

  async updateMovie() {
    await this.movieService.update(this.movie);
    this.router.navigate(['/admin/movies']);
  }

}
