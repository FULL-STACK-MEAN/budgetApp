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

  postCustomer(customer: Customer) {
    return this.http.put(this.customersEndpoint, customer)
                    .pipe(
                      map((res: any) => {
                        return res;
                      })
                    )
  }

}
