import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

    form: FormGroup;
    @Output() customerEmitter: EventEmitter<Customer> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
        this.form = new FormGroup({
            name: new FormControl(''),
            cif: new FormControl(''),
            adress: new FormControl(''),
            cp: new FormControl(''),
            city: new FormControl(''),
            contact: new FormGroup({
                name: new FormControl(''),
                surname: new FormControl(''),
                phone: new FormControl(''),
                email: new FormControl('')
            })
        })
    }

    submitCustomer() {
        this.customerEmitter.emit(this.form.value);
    }

}
