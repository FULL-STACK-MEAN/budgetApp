import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetsRoutingModule } from './budgets-routing.module';
import { BudgetsReportComponent } from './budgets-report/budgets-report.component';
import { CreateBudgetComponent } from './create-budget/create-budget.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BudgetsReportComponent,
    CreateBudgetComponent
  ],
  imports: [
    CommonModule,
    BudgetsRoutingModule,
    SharedModule
  ]
})
export class BudgetsModule { }
