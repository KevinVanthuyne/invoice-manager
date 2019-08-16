import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import uuid from 'uuid/v4';
import { Router } from '@angular/router';

import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from 'src/app/models/Invoice';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css'],
})
export class InvoiceFormComponent implements OnInit {
  invoiceForm = this.formBuilder.group({
    id: [uuid()],
    customerId: [''],
    expenses: this.formBuilder.array([]),
    tax: [21],
  });

  constructor(
    private invoiceService: InvoiceService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    const invoice = this.invoiceService.get();
    if (invoice) {
      invoice.expenses.forEach(() => this.addExpense());
      this.invoiceForm.setValue(invoice);
    } else {
      this.addExpense();
    }
  }

  addExpense() {
    this.expenses.push(this.createEmptyExpense());
  }

  removeExpense(index: number) {
    this.expenses.removeAt(index);
  }

  get expenses() {
    return this.invoiceForm.get('expenses') as FormArray;
  }

  createEmptyExpense() {
    return this.formBuilder.group({
      id: [uuid()],
      description: [''],
      quantity: [''],
      unitPrice: [''],
    });
  }

  onSubmit() {
    let invoice: Invoice = this.invoiceForm.value;
    invoice.expenses = invoice.expenses.filter(
      expense => expense.description || expense.quantity || expense.unitPrice
    );
    this.invoiceService.save(invoice);
    this.router.navigate(['/invoice-preview']);
  }

  clear() {
    this.invoiceForm.reset({
      id: this.invoiceForm.value.id,
    });
  }
}
