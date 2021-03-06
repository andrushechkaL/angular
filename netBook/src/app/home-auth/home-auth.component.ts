import { Component, OnInit } from '@angular/core';
import {User} from "../_models";
import {UserService} from "../_services/user.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-home-auth',
  templateUrl: './home-auth.component.html',
  styleUrls: ['./home-auth.component.css']
})
export class HomeAuthComponent implements OnInit {

  loading = false;
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.loading = true;
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
    });

  }

}
