import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Budget } from 'src/app/models/budget.model';
import { BudgetsService } from 'src/app/services/budgets.service';
import { ToastMessagesService } from 'src/app/services/toast-messages.service';

@Component({
  selector: 'app-read-budget',
  templateUrl: './read-budget.component.html',
  styleUrls: ['./read-budget.component.scss']
})
export class ReadBudgetComponent implements OnInit {

  dataRoutes: any;
  _id: string;
  budget: Budget;

  constructor(private route: ActivatedRoute,
              private toastMessagesService: ToastMessagesService,
              private budgetsService: BudgetsService) { }

  ngOnInit(): void {
    this.dataRoutes = this.route.pathFromRoot;
    this._id = this.route.snapshot.params._id;
    this.budgetsService.getBudget(this._id)
                        .subscribe((res: any) => {
                            this.budget = res.budget;
                        }, (err: any) => {
                            this.toastMessagesService.setToastMessage('warning', 'El servidor no se encuentra disponible en estos momentos');
                        })
  }

}
