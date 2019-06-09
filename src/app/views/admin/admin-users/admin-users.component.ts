import { Component, OnInit } from '@angular/core';
import { UserService } from '@services/user.service';

@Component({
  templateUrl: './admin-users.component.html',
})
export class AdminUsersComponent implements OnInit {
  users = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadUsers();
  }

  async loadUsers() {
    this.users = await this.userService.list();
  }

  async delete(user) {
    if (!confirm(`Are you sure you want to delete ${user.TaiKhoan}?`)) {
      return;
    }

    /* Delete at Backend */
    await this.userService.deleteUser(user.TaiKhoan);

    /* Delete at Frontend */
    const index = this.users.findIndex(({ TaiKhoan }) => TaiKhoan === user.TaiKhoan);
    this.users.splice(index, 1);
  }

}
