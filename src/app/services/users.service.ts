import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  usersEndpoint: string = environment.URLAPIserver + 'users/';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.usersEndpoint)
                    .pipe(
                      map( (res: any) => {
                        return res;
                      })
                    )
  }

  getUser(_id: string) {
    return this.http.get(this.usersEndpoint + _id)
                    .pipe(
                      map( (res: any) => {
                        return res;
                      })
                    )
  }

  updateUserRole(_id: string, role: string) {
    return this.http.put(this.usersEndpoint + 'role/' + _id, {role})
                    .pipe(
                      map( (res: any) => {
                        return res;
                      })
                    )
  }

}
