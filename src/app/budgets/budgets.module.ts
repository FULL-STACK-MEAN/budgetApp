import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetsRoutingModule } from './budgets-routing.module';
import { BudgetsReportComponent } from './budgets-report/budgets-report.component';
import { CreateBudgetComponent } from './create-budget/create-budget.component';
import { SharedModule } from '../shared/shared.module';
import { BudgetFormComponent } from './budget-form/budget-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BudgetsReportComponent,
    CreateBudgetComponent,
    BudgetFormComponent
  ],
  imports: [
    CommonModule,
    BudgetsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class BudgetsModule { }
