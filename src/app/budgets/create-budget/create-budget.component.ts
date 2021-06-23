import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Budget } from 'src/app/models/budget.model';
import { BudgetsService } from 'src/app/services/budgets.service';

@Component({
  selector: 'app-create-budget',
  templateUrl: './create-budget.component.html',
  styleUrls: ['./create-budget.component.scss']
})
export class CreateBudgetComponent implements OnInit {

  dataRoutes: any;

  constructor(private route: ActivatedRoute,
              private budgetsService: BudgetsService) { }

  ngOnInit(): void {
      this.dataRoutes = this.route.pathFromRoot;
  }

  submitBudget(event: Budget) {
      this.budgetsService.postBudget(event)
                         .subscribe((res: any) => {
                             console.log(res);
                         }, (err: any) => {
                             console.log(err);
                         })
  }

}
