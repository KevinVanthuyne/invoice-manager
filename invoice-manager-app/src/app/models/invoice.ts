import { Expense } from './expense';

export class Invoice {
  id: string;
  customerId: number;
  expenses: Expense[];
}
