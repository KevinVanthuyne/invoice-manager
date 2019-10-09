import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ExpenseService } from 'src/app/services/expense.service';
import { Status } from 'src/app/models/jsonResponse';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css'],
})
export class ExpenseFormComponent implements OnInit {
  private expenseForm: FormGroup;

  constructor(
    private expenseService: ExpenseService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    // TODO get expense id from backend
    this.buildForm();
  }

  buildForm() {
    this.expenseForm = this.formBuilder.group({
      id: [],
      description: [],
      unitPrice: [],
    });
  }

  onSubmit() {
    const formData = this.expenseForm.value;
    const expense = { ...formData };
    this.expenseService.createExpense(expense).subscribe(response => {
      alert(`${response.status}: ${response.message}`);
      if (response.status == Status.SUCCESS) this.expenseForm.reset();
    });
  }
}
