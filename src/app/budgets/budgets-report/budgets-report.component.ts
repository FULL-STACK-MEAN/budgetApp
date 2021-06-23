import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Budget } from 'src/app/models/budget.model';
import { BudgetsService } from 'src/app/services/budgets.service';
import { ToastMessagesService } from 'src/app/services/toast-messages.service';

@Component({
  selector: 'app-budgets-report',
  templateUrl: './budgets-report.component.html',
  styleUrls: ['./budgets-report.component.scss']
})
export class BudgetsReportComponent implements OnInit {

  dataRoutes: any;
  budgets: Array<Budget>;

  constructor(private route: ActivatedRoute,
              private toastMessagesService: ToastMessagesService,
              private budgetsService: BudgetsService) { }

  ngOnInit(): void {
      this.dataRoutes = this.route.pathFromRoot;
      this.loadBudgets();
  }

  loadBudgets() {
      this.budgetsService.getBudgets()
                         .subscribe((res: any) => {
                             this.budgets = res.budgets;
                             this.setTotal();
                         }, (err: any) => {
                            this.toastMessagesService.setToastMessage('warning', 'El servidor no se encuentra disponible en estos momentos')
                         })
  }

    setTotal() {
        this.budgets.forEach((elem: any) => {
            let total = 0;
            elem.items.forEach(elem => {
                total += elem.amount;
            });
            elem.total = total;
        })
    }

}
