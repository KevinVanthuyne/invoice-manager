import { Component, OnInit } from '@angular/core';
import uuid from 'uuid/v4';

import { Invoice } from 'src/app/models/Invoice';
import { Expense } from 'src/app/models/Expense';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css'],
})
export class InvoiceFormComponent implements OnInit {
  invoice: Invoice = {
    id: uuid(),
    customerId: '',
    expenses: [],
  };
  expenses: Expense[] = [
    {
      id: uuid(),
      description: undefined,
      price: undefined,
    },
  ];

  constructor() {}

  ngOnInit() {}

  addExpense() {
    this.expenses.push({
      id: uuid(),
      description: undefined,
      price: undefined,
    });
  }

  onSubmit() {
    console.log('invoice:', this.invoice);
    console.log('expenses:', this.expenses);
  }
}
