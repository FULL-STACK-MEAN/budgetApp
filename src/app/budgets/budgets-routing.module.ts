import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetsReportComponent } from './budgets-report/budgets-report.component';
import { CreateBudgetComponent } from './create-budget/create-budget.component';

const routes: Routes = [
    {
        path: '',
        component: BudgetsReportComponent
    },
    {
        path: 'create-budget',
        component: CreateBudgetComponent,
        data: {
            title: 'Nuevo presupuesto',
            absolutePath: '/budgets/create-budget'
        }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetsRoutingModule { }
