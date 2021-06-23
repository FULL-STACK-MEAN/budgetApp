import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Budget } from '../models/budget.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class BudgetsService {

    private budgetsEndpoint = environment.URLAPIserver + 'budgets/';

    constructor(private http: HttpClient) { }

    postBudget(budget: Budget) {
        return this.http.post(this.budgetsEndpoint, budget)
                        .pipe(
                            map((res: any) => {
                                return res;
                            })
                        )
    }


}