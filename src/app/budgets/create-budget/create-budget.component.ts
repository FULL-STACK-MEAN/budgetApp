import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-budget',
  templateUrl: './create-budget.component.html',
  styleUrls: ['./create-budget.component.scss']
})
export class CreateBudgetComponent implements OnInit {

  dataRoutes: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.dataRoutes = this.route.pathFromRoot;
  }

}
