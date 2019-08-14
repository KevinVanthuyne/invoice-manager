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

    // generate all expense rows and calculate total cost
    let expensesTable = document.getElementById('expenses');
    let tableBody = expensesTable.children[0];
    let totalCost = 0;

    this.invoice.expenses.forEach(expense => {
      totalCost += expense.price;
      let row = document.createElement('tr');

      expenseProperties.forEach(property => {
        let td = document.createElement('td');
        td.textContent = expense[property];
        row.appendChild(td);
      });

      tableBody.insertBefore(row, expenseRow);
    });
    tableBody.removeChild(expenseRow);

    // calculate and display VAT + totals
    let subtotal = document.getElementById('subtotal');
    subtotal.textContent = totalCost.toString();

    let tax = document.getElementById('tax');
    tax.textContent = this.invoice.tax.toString() + '%';

    let totalElement = document.getElementById('total');
    let total = totalCost + totalCost * (this.invoice.tax / 100);
    totalElement.textContent = total.toString();
  }
}
