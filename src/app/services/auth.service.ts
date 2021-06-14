import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authEndpoint: string = environment.URLAPIserver + 'auth/';

  private userState = {
    _id: '',
    name: ''
  }

  private userStateSubject: BehaviorSubject<any> = new BehaviorSubject<any>(this.userState);

  getUserState(): Observable<any> {
    return this.userStateSubject.asObservable();
  }

  setUserState(userState: any): void {
    this.userState = userState;
    this.userStateSubject.next(this.userState);
  }

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
