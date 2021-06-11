import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form: FormGroup;
  showValidation: boolean = false;
  validationMessage: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      checkPassword: new FormControl('', [Validators.required]),
    })
  }

  signUp() {
    const user = {
      name: this.form.get('name').value,
      surname: this.form.get('surname').value,
      email: this.form.get('email').value,
      password: this.form.get('password').value,
    }
    this.authService.signUp(user)
                    .subscribe((res: any) => {
                      console.log(res);
                    }, (err: any) => {
                      console.log(err);
                    })
  }

  setValidation() {
    if(this.form.get('password').value !== this.form.get('checkPassword').value) {
      this.validationMessage = "Las contraseñas no coinciden"
    }
    this.showValidation = true;
  }

}
