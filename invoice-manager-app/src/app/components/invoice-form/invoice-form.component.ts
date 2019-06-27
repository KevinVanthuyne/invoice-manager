import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import uuid from 'uuid/v4';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css'],
})
export class InvoiceFormComponent implements OnInit {
  invoiceForm = this.formBuilder.group({
    id: [uuid()],
    customerId: [''],
    expenses: this.formBuilder.array([this.createEmptyExpense()]),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}

  addExpense() {
    this.expenses.push(this.createEmptyExpense());
  }

  removeExpense(index: number) {
    this.expenses.removeAt(index);
  }

  onSubmit() {
    console.log('Submitting');
    console.log('invoice:', this.invoiceForm.value);
  }

  get expenses() {
    return this.invoiceForm.get('expenses') as FormArray;
  }

  createEmptyExpense() {
    return this.formBuilder.group({
      id: [uuid()],
      description: [''],
      price: [''],
    });
  }
}
