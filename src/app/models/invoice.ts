import { Moment } from 'moment';

import { Customer } from './customer';
import { Expense } from './expense';

export class Invoice {
  id: string;
  customer: Customer;
  expenses: Expense[];
  tax: number;
  date: Moment;
  expirationDate: Moment;
}
