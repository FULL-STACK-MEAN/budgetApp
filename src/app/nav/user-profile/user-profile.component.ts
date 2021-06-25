import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  dataRoutes: any;
  _id: string;
  user: any;

  constructor(private usersService: UsersService,
              private route: ActivatedRoute,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.dataRoutes = this.route.pathFromRoot;
    this.authService.getUserState()
                    .subscribe((data: any) => {
                      this._id = data._id;
                      this.usersService.getUser(this._id)
                                       .subscribe((res: any) => {
                                          this.user = res.user;
                                       }, (err: any) => {
                                          console.log(err);
                                       })
                    })
  }

}
