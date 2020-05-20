import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  photoUrl: string;

  constructor(public authservice: AuthService, private alertifyServ: AlertifyService, private router: Router) { }

  ngOnInit() {
    this.authservice.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
  }

  login() {
    this.authservice.login(this.model).subscribe(next => {
      this.alertifyServ.success('Logged in successfully');
    }, error => {
      this.alertifyServ.error(error);
    }, () => {
      this.router.navigate(['/members']);
    });
  }

  loggedIn(){
    const token = localStorage.getItem('token');
    return this.authservice.loggedIn();
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authservice.decodedToken = null;
    this.authservice.currentUser = null;
    this.alertifyServ.message('Logged out');
    this.router.navigate(['/home']);
  }

}
