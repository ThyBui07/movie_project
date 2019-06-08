import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '@services/user.service';

@Component({
  selector: 'admin-user-form-component',
  templateUrl: './admin-user-form.component.html',
})
export class AdminUserFormComponent implements OnInit {
  roles = [];

  @Input() user: any = {};
  @Input() errorMessage = '';

  @Output()
  submit = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUserRoles();
  }

  async getUserRoles() {
    this.roles = await this.userService.roles();
  }

  save() {
    this.submit.emit(this.user);
  }

}
