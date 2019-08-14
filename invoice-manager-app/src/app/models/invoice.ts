import { Expense } from './expense';

export class Invoice {
  id: string;
  customerId: string;
  expenses: Expense[];
  tax: number;
}
