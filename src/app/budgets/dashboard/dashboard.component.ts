import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';
import { Budget } from 'src/app/models/budget.model';
import { Dates } from 'src/app/models/dates.model';
import { BudgetsService } from 'src/app/services/budgets.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    dataRoutes: any;
    budgets: Array<Budget>;

    currentMonthTotal: number;
    lastMonthTotal: number;
    secondLastMonthTotal: number;


    lineChart: any = [];

    constructor(private route: ActivatedRoute,
        private budgetsService: BudgetsService) { }

    ngOnInit(): void {
        this.dataRoutes = this.route.pathFromRoot;
        this.budgetsService.getBudgets()
            .subscribe((res: any) => {
                this.budgets = res.budgets;
                this.setTotal();
                this.currentMonthTotal = this.getTotalMonth(Dates.getDates().firstDayCurrentMonth, Dates.getDates().lastDayCurrentMonth);
                this.lastMonthTotal = this.getTotalMonth(Dates.getDates().firstDayLastMonth, Dates.getDates().lastDayLastMonth);
                this.secondLastMonthTotal = this.getTotalMonth(Dates.getDates().firstDaySecondLastMonth, Dates.getDates().lastDaySecondLastMonth);
                this.loadLineChart();
            }, (err: any) => {
                console.log(err);
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

    getTotalMonth(firstDay: any, lastDay: any) {
        let totalMonth = 0;
        this.budgets.forEach((elem: any) => {
            if (new Date(elem.date).getTime() >= firstDay.getTime() &&
                new Date(elem.date).getTime() < (lastDay.getTime() + 24 * 60 * 60 * 1000)) {
                totalMonth += elem.total;
            }
        })
        return totalMonth;
    }

    loadLineChart() {
        const months = ['Abril 2021', 'Mayo 2021', 'Junio 2021'];
        const totals = [this.secondLastMonthTotal, this.lastMonthTotal, this.currentMonthTotal];
        this.lineChart = new Chart('budgetsChart', {
            type: 'line',
            data: {
                labels: months,
                datasets: [
                    {
                        data: totals,
                        borderColor: '#0a2558'
                    }
                ]
            },
            options: {
                legend: {
                    display: false
                }
            }
        })
    }

}
