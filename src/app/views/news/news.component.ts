import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'news-view',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(private usersService: UsersService ) { }

  ngOnInit() {
    this.getList();
  }

  getList(){
    this.usersService.list().then((res) =>{
      console.log(res);
    });
  }
}
