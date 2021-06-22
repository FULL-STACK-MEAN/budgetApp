import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-budgets-report',
  templateUrl: './budgets-report.component.html',
  styleUrls: ['./budgets-report.component.scss']
})
export class BudgetsReportComponent implements OnInit {

  dataRoutes: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.dataRoutes = this.route.pathFromRoot;
  }

}
