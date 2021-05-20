import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from 'src/app/services/users.service';
import {Users} from '../../interfaces/user.interface';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})

export class ListUsersComponent implements OnInit {

  users: any = [];
  term: string;
  API_URI = '/assets/mock-data.json';

  constructor(private http: HttpClient, private userService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUser().subscribe((data: Users[]) => {
      this.users = data;
    });
  }

  infoUser(user){    
    localStorage.setItem("user", JSON.stringify(user))
  }

}
