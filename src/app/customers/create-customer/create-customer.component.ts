import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

  dataRoutes: any;

  constructor(private route: ActivatedRoute,
              private customersService: CustomersService) { }

  ngOnInit(): void {
    this.dataRoutes = this.route.pathFromRoot;
  }

  submitCustomer(event: Customer) {
      this.customersService.postCustomer(event)
                           .subscribe((res: any) => {
                               console.log(res);
                           }, (err: any) => {
                               console.log(err);
                           })
  }

}
