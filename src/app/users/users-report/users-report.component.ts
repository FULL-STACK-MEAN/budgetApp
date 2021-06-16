import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-report',
  templateUrl: './users-report.component.html',
  styleUrls: ['./users-report.component.scss']
})
export class UsersReportComponent implements OnInit {

  users: any;
  userUpdated: any = {
    _id: '',
    role: ''
  }

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getUsers()
                    .subscribe((res: any) => {
                      this.users = res.users;
                    }, (err: any) => {
                      console.log(err);
                    })
  }

  onChangeRole(_id, event: any): void {
    this.userUpdated = {
      _id,
      role: event.target.value
    }
  } 

  updateUserRole() {
    this.userService.updateUserRole(this.userUpdated._id, this.userUpdated.role)
                    .subscribe((res: any) => {
                      console.log(res);
                    }, (err: any) => {
                      console.log(err);
                    })
  }

}
