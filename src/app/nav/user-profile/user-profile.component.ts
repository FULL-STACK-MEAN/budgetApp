import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { ToastMessagesService } from 'src/app/services/toast-messages.service';
import { UsersService } from 'src/app/services/users.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  dataRoutes: any;
  _id: string;
  user: User;
  form: FormGroup;
  uploader: FileUploader;
  avatarEndpoint: string = environment.URLAPIserver + 'users/avatar';

  constructor(private usersService: UsersService,
              private route: ActivatedRoute,
              private toastMessagesService: ToastMessagesService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.dataRoutes = this.route.pathFromRoot;
    this.form = new FormGroup({
        name: new FormControl(''),
        surname: new FormControl(''),
        email: new FormControl(''),
        adress: new FormControl(''),
        cp: new FormControl(''),
        city: new FormControl(''),
        phone: new FormControl(''),
    })
    this.authService.getUserState()
                    .subscribe((data: any) => {
                      this._id = data._id;
                      this.usersService.getUser(this._id)
                                       .subscribe((res: any) => {
                                          this.user = res.user;
                                          this.form.patchValue(this.user);
                                       }, (err: any) => {
                                          console.log(err);
                                       })
                    })
    this.uploader = new FileUploader({url: this.avatarEndpoint})
  }

  updateUser() {
      const user: User = {
          name: this.form.get('name').value,
          surname: this.form.get('surname').value,
          adress: this.form.get('adress').value,
          cp: this.form.get('cp').value,
          city: this.form.get('city').value,
          phone: this.form.get('phone').value,
      }
      this.usersService.updateUser(this._id, user)
                       .subscribe((res: any) => {
                           this.toastMessagesService.setToastMessage('success', res.message);
                       }, (err: any) => {
                            if (err.error?.message) {
                                this.toastMessagesService.setToastMessage('danger', err.error.message);
                            } else {
                                this.toastMessagesService.setToastMessage('warning', 'El servidor no se encuentra disponible en estos momentos')
                            }
                       })
  }

}
