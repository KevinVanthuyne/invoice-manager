import { Component, OnInit } from '@angular/core';
import uuid from 'uuid/v4';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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

  removeExpense(index: number) {
    this.expenses.splice(index, 1);
  }

  onSubmit() {
    console.log('Submitting');
    console.log('invoice:', this.invoice);
    console.log('expenses:', this.expenses);
    console.log(document.querySelector('body'));

    // TODO navigate to preview page with nice html layout

    window.html2canvas = html2canvas;
    const doc = new jsPDF('p', 'pt', 'a4');
    const savePdf = () => doc.save('test.pdf');
    doc.html(document.querySelector('body'), {
      callback: savePdf,
    });
  }
}
