import { Component, OnInit } from '@angular/core';

import { InvoiceService } from 'src/app/services/invoice.service';
import { Invoice } from 'src/app/models/Invoice';

@Component({
  selector: 'app-invoice-template',
  templateUrl: '../../../assets/invoice-template.html',
  styleUrls: ['../../../assets/invoice-template.css'],
})
export class InvoiceTemplateComponent implements OnInit {
  invoice: Invoice;

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit() {
    this.invoice = this.invoiceService.get();
    this.fillInTemplate();
  }

  fillInTemplate() {
    let invoiceId = document.getElementById('invoiceId');
    invoiceId.textContent = this.invoice.id;

    let customerId = document.getElementById('customerId');
    customerId.textContent = this.invoice.customerId;

    // find order for expense properties in template
    let expenseRow = document.getElementById('expenseRow');
    let expenseRowChildren = Array.from(expenseRow.children);
    let expenseProperties = [];

    expenseRowChildren.forEach(child => {
      let property = child.id.split('expense')[1].toLowerCase();
      expenseProperties.push(property);
    });

    // generate all expense rows
    let expensesTable = document.getElementById('expenses');
    this.invoice.expenses.forEach(expense => {
      let row = document.createElement('tr');

      expenseProperties.forEach(property => {
        let td = document.createElement('td');
        td.textContent = expense[property];
        row.appendChild(td);
      });

      expensesTable.appendChild(row);
    });
  }
}
