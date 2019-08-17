import { Component, OnInit } from '@angular/core';

import { InvoiceService } from 'src/app/services/invoice.service';
import { Invoice } from 'src/app/models/Invoice';

@Component({
  selector: 'app-invoice-template',
  templateUrl: 'invoice-template.component.html',
  styleUrls: ['invoice-template.component.css'],
})
export class InvoiceTemplateComponent implements OnInit {
  invoice: Invoice;
  subtotal: number;
  total: number;

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit() {
    this.invoice = this.invoiceService.get();
    this.fillInTotals();
  }

  fillInTotals() {
    this.subtotal = this.invoice.expenses.reduce(
      (sum, expense) => sum + expense.unitPrice * expense.quantity,
      0
    );
    this.total = this.subtotal + this.subtotal * (this.invoice.tax / 100);
  }
}
