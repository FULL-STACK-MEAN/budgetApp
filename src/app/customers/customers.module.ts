import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersReportComponent } from './customers-report/customers-report.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CustomersReportComponent,
    CreateCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule
  ]
})
export class CustomersModule { }
