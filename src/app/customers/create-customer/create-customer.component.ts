import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

  dataRoutes: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataRoutes = this.route.pathFromRoot;
  }

}
