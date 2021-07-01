import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Budget } from 'src/app/models/budget.model';
import { BudgetsService } from 'src/app/services/budgets.service';
import { ToastMessagesService } from 'src/app/services/toast-messages.service';
import { UsersService } from 'src/app/services/users.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-read-budget',
  templateUrl: './read-budget.component.html',
  styleUrls: ['./read-budget.component.scss']
})
export class ReadBudgetComponent implements OnInit {

  dataRoutes: any;
  _id: string;
  budget: Budget;
  totalBudget = 0;
  user: any;
  pathPDF: string;

  constructor(private route: ActivatedRoute,
              private toastMessagesService: ToastMessagesService,
              private budgetsService: BudgetsService,
              private http: HttpClient,
              private usersService: UsersService) { }

  ngOnInit(): void {
    this.dataRoutes = this.route.pathFromRoot;
    this._id = this.route.snapshot.params._id;
    this.budgetsService.getBudget(this._id)
                        .subscribe((res: any) => {
                            this.budget = res.budget;
                            this.generatePDF();
                            this.usersService.getUser(res.budget.idSalesUser)
                                             .subscribe((res: any) => {
                                                 this.user = res.user;
                                             }, (err: any) => {
                                                 this.toastMessagesService.setToastMessage('warning', 'El servidor no se encuentra disponible en estos momentos');
                                             })
                            this.budget.items.forEach(elem => {
                                this.totalBudget += elem.amount;
                            });
                        }, (err: any) => {
                            this.toastMessagesService.setToastMessage('warning', 'El servidor no se encuentra disponible en estos momentos');
                        })
  }

  generatePDF() {
      this.budgetsService.getPDFBudget(this._id)
                        .subscribe((res: any) => {
                            this.pathPDF = environment.URLAPIserver + 'budgetspdf/' + this.budget.code + '.pdf';
                            // let headers = new HttpHeaders();
                            // headers = headers.set('Accept', 'application/pdf');
                            // this.http.get(environment.URLAPIserver + 'budgetspdf/' + this.budget.code + '.pdf', { headers: headers, responseType: 'blob' })
                            //          .subscribe((res: any) => {
                            //              console.log(res)
                            //          }, (err: any) => {
                            //              console.log(err)
                            //              //this.toastMessagesService.setToastMessage('warning', 'El servidor no se encuentra disponible en estos momentos');
                            //          })
                        }, (err: any) => {
                            this.toastMessagesService.setToastMessage('warning', 'El servidor no se encuentra disponible en estos momentos');
                        })
  }

  sendBudgetEmail() {
      this.budgetsService.getSendBudgetEmail(this._id)
                        .subscribe((res: any) => {
                            console.log(res);
                        }, (err: any) => {
                            this.toastMessagesService.setToastMessage('warning', 'El servidor no se encuentra disponible en estos momentos');
                        })
  }

}
