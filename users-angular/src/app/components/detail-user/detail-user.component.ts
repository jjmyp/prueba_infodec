import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {

  user: any;
  constructor(private http: HttpClient, private userService: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUserById();
  }

  getUserById(){
    this.user = JSON.parse(localStorage.getItem("user"))    
  }
}
