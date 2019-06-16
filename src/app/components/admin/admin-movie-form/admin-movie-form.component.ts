import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieService } from '@services/movie.service';

@Component({
  selector: 'admin-movie-form-component',
  templateUrl: './admin-movie-form.component.html',
})
export class AdminMovieFormComponent implements OnInit {
  file: File;
  roles = [];

  @Input() movie: any = {};
  @Input() errorMessage = '';

  @Output()
  submit = new EventEmitter();

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  fileOnChange(event: any) {
    this.file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
  }

  async save() {
    if (this.file) {
      await this.movieService.uploadFile(this.file, this.movie.TenPhim);
    }
    this.submit.emit();
  }
}
