import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '@services/movie.service';

@Component({
  templateUrl: './movie-detail.component.html',
})
export class MovieDetailComponent implements OnInit {
  movie: Object = null;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    this.getDetail();
  }

  async getDetail() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.movie = await this.movieService.movieById(id);
  }

}
