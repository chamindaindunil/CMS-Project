import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) { }

  userList: any[] = [];

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(data => {
      this.userList = data;
    })
  }

}
