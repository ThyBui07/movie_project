import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'about-view',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.test();
  }

  async test() {
    this.movieService.list().then((res) => {
      // console.log('Before');
      // console.log('After', res);
    });

    const haha = await this.movieService.list();
    console.log(haha);

    // console.log('After');
  }

}
