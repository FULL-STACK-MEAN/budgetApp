import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
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
    @ViewChildren('searchItem') searchItemsRef: QueryList<any>;
    selectedItemIndex: number = -1;

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
            items: new FormArray([])
        })
        this.searchCustomer();
        this.addFormItem();
    }

    newFormItem(): FormGroup {
        return this.fb.group({
            article: '',
            quantity: 0,
            price: 0,
            amount: 0
        })
    }

    get items(): FormArray {
        return this.form.get('items') as FormArray; 
    }

    addFormItem() {
        this.items.push(this.newFormItem())
    }

    removeFormItem(i: number) {
        this.items.removeAt(i);
    }

    searchCustomer() {
        this.form.get('name').valueChanges
                             .subscribe(data => {
                                 this.selectedItemIndex = -1;
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

    selectCustomer() {
        this.setCustomer(this.customers[this.selectedItemIndex])
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

    focusDown() {
        if(this.selectedItemIndex < this.searchItemsRef.length - 1) {
            this.selectedItemIndex++;
            this.searchItemsRef.forEach((elem, i) => {
                if(this.selectedItemIndex === i) {
                    elem.nativeElement.classList.add('selected');
                } else {
                    elem.nativeElement.classList.remove('selected');
                }
            })
        }
    }

    focusUp() {
        if(this.selectedItemIndex > 0) {
            this.selectedItemIndex--;
            this.searchItemsRef.forEach((elem, i) => {
                if(this.selectedItemIndex === i) {
                    elem.nativeElement.classList.add('selected');
                } else {
                    elem.nativeElement.classList.remove('selected');
                }
            })
        }
    }

}
