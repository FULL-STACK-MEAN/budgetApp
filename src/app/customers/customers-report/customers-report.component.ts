import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customers-report',
  templateUrl: './customers-report.component.html',
  styleUrls: ['./customers-report.component.scss']
})
export class CustomersReportComponent implements OnInit {

  dataRoutes: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataRoutes = this.route.pathFromRoot;
  }

}
