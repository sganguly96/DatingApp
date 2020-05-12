import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/User.service';
import { AlertifyService } from '../../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  compUsers: User[];

  constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.compUsers = data['users'];
    });
  }

  //loadUsers() {
  //  this.userService.getUsers().subscribe((users: User[]) => {
  //    this.compUsers = users;
  //  }, error => {
  //    this.alertify.error(error);
  //  }
  //);
  //}

}
