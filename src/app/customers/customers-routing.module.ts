import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomersReportComponent } from './customers-report/customers-report.component';

const routes: Routes = [
  {path: '', component: CustomersReportComponent},
  {path: 'create-customer', component: CreateCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
