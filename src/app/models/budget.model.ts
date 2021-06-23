import { Customer } from "./customer.model";

export interface Budget {
    _id?: string,
    code?: string,
    customer: Customer,
    date: object,
    validUntil: object,
    items: object,
    total?: number
}