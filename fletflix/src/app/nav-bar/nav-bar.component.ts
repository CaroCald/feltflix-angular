import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
username;
  constructor(private cookieService: CookieService) { }

  ngOnInit() {
this.username=this.cookieService.get('user');
  }

}
