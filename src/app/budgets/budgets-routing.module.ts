import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetsReportComponent } from './budgets-report/budgets-report.component';
import { CreateBudgetComponent } from './create-budget/create-budget.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'budgets-report',
        component: BudgetsReportComponent,
        data: {
            title: 'Presupuestos',
            absolutePath: '/budgets/budgets-report'
        }
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
