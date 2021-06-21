import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private customersEndpoint = environment.URLAPIserver + 'customers/';

  constructor(private http: HttpClient) { }

  getCustomers() {
      return this.http.get(this.customersEndpoint)
                      .pipe(
                        map((res: any) => {
                            return res;
                        })
                       )
  }

  getCustomer(_id: string) {
      return this.http.get(this.customersEndpoint + _id)
                      .pipe(
                        map((res: any) => {
                            return res;
                        })
                       )
  }

  postCustomer(customer: Customer) {
    return this.http.post(this.customersEndpoint, customer)
                    .pipe(
                      map((res: any) => {
                        return res;
                      })
                    )
  }

}
