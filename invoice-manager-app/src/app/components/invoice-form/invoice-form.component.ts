import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/models/Invoice';
import { Expense } from 'src/app/models/Expense';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css'],
})
export class InvoiceFormComponent implements OnInit {
  invoice: Invoice = new Invoice();
  expenses: Expense[] = [new Expense()];

  constructor() {}

  ngOnInit() {}

  addExpense() {
    this.expenses.push(new Expense());
  }

  saveInvoice() {
    console.log('invoice:', this.invoice);
    console.log('expenses:', this.expenses);
  }
}
