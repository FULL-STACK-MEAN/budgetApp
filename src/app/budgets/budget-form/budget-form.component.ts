import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Customer } from 'src/app/models/customer.model';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.scss']
})
export class BudgetFormComponent implements OnInit {

    form: FormGroup;
    customers: Array<Customer>;
    customer: Customer;

    constructor(private fb: FormBuilder,
                private customersService: CustomersService) { }

    ngOnInit(): void {
        this.form = this.fb.group({
            name: '',
            cif: '',
            contactName: '',
            contactSurname: '',
            contactPhone: '',
            contactEmail: '',
            date: (new Date()).toISOString().substring(0,10),
            validUntil: (new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000)).toISOString().substring(0, 10),
        })
        this.searchCustomer();
    }

    searchCustomer() {
        this.form.get('name').valueChanges
                             .subscribe(data => {
                                 if (data !== '') {
                                    this.customersService.findCustomer(data)
                                                        .subscribe((res: any) => {
                                                            this.customers = res.customers;
                                                        }, (err: any) => {
                                                            console.log(err);
                                                        })
                                 } else {
                                     this.customers = [];
                                 }
                             })
    }

    setCustomer(customer: Customer) {
        this.customer = customer;
        this.customers = [];
        this.form.get('name').patchValue(this.customer.name, {emitEvent: false})
        this.form.get('cif').patchValue(this.customer.cif, {emitEvent: false})
        this.form.get('contactName').patchValue(this.customer.contact.name, {emitEvent: false})
        this.form.get('contactSurname').patchValue(this.customer.contact.surname, {emitEvent: false})
        this.form.get('contactPhone').patchValue(this.customer.contact.phone, {emitEvent: false})
        this.form.get('contactEmail').patchValue(this.customer.contact.email, {emitEvent: false})
    }

}
