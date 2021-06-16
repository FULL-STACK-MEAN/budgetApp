import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersReportComponent } from './customers-report/customers-report.component';

const routes: Routes = [
  {path: '', component: CustomersReportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
