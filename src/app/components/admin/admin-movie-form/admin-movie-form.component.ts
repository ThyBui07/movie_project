import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieService } from '@services/movie.service';

@Component({
  selector: 'admin-movie-form-component',
  templateUrl: './admin-movie-form.component.html',
})
export class AdminMovieFormComponent implements OnInit {
  roles = [];

  @Input() movie: any = {};
  @Input() errorMessage = '';

  @Output()
  submit = new EventEmitter();

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  save() {
    this.submit.emit(this.movie);
  }
}
