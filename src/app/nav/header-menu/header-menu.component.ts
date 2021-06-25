import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {

  user: any;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
      this.authService.getUserState()
                      .subscribe(data => {
                          this.user = data;
                      })
  }

  logOut() {
    this.authService.logOut()
  }

}
