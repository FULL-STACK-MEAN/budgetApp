import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authEndpoint: string = environment.URLAPIserver + 'auth/';

  constructor(private http: HttpClient) { }

  signUp(user) {
    return this.http.post(this.authEndpoint + 'signup', user)
                    .pipe(
                      map((res: any) => {
                        return res;
                      })
                    )
  }

  logIn(credentials) {
    return this.http.post(this.authEndpoint + 'login', credentials)
                    .pipe(
                      map((res: any) => {
                        return res;
                      })
                    )
  }


}
