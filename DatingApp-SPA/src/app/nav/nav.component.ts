import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public authservice: AuthService, private alertifyServ: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    this.authservice.login(this.model).subscribe(next => {
      this.alertifyServ.success('Logged in successfully');
    }, error => {
      this.alertifyServ.error(error);
    });
  }

  loggedIn(){
    const token = localStorage.getItem('token');
    return this.authservice.loggedIn();
  }

  logout(){
    localStorage.removeItem('token');
    this.alertifyServ.message('Logged out');
  }

}
