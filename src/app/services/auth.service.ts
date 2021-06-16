import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authEndpoint: string = environment.URLAPIserver + 'auth/';

  private userState = {
    _id: '',
    name: '',
    role: ''
  }

  private userStateSubject: BehaviorSubject<any> = new BehaviorSubject<any>(this.userState);

  getUserState(): Observable<any> {
    return this.userStateSubject.asObservable();
  }

  setUserState(userState: any): void {
    this.userState = userState;
    this.userStateSubject.next(this.userState);
  }

  constructor(private http: HttpClient,
              private router: Router) { }

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

  checkToken() {
    // const token = localStorage.getItem('token');
    // const options = {
    //   headers: { authorization: token}
    // }
    // return this.http.get(this.authEndpoint + 'checktoken', options)
    return this.http.get(this.authEndpoint + 'checktoken')
                    .pipe(
                      map((res: any) => {
                        return res;
                      })
                    )
  }

  logOut() {
    return this.http.get(this.authEndpoint + 'logout')
                    .subscribe((res: any) => {
                      console.log(res);
                      this.setUserState({
                        _id: '',
                        name: ''
                      })
                      this.router.navigate(['/login']);
                    }, (err: any) => {
                      console.log(err);
                    })
  }


}
