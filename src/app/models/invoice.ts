import { Expense } from './expense';
import { Moment } from 'moment';

export class Invoice {
  id: string;
  customerId: string;
  expenses: Expense[];
  tax: number;
  date: Moment;
  expirationDate: Moment;
}
