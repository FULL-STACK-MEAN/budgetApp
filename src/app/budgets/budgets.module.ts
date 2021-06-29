import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { BudgetsRoutingModule } from './budgets-routing.module';
import { BudgetsReportComponent } from './budgets-report/budgets-report.component';
import { CreateBudgetComponent } from './create-budget/create-budget.component';
import { SharedModule } from '../shared/shared.module';
import { BudgetFormComponent } from './budget-form/budget-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    BudgetsReportComponent,
    CreateBudgetComponent,
    BudgetFormComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BudgetsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    ChartsModule
  ]
})
export class BudgetsModule { }
