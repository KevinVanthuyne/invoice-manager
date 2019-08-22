import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Customer, createCustomer } from 'src/app/models/customer';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],
})
export class CustomerFormComponent implements OnInit {
  private customerForm: FormGroup;

  constructor(
    private customerService: CustomerService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    // TODO get customer number from backend
    this.buildForm();
  }

  buildForm() {
    this.customerForm = this.formBuilder.group({
      customerNumber: [],
      name: [],
      email: [],
      bankAccount: [''],
      street: [''],
      houseNumber: [''],
      zipCode: [''],
      city: [''],
      phoneNumber: [''],
    });
  }

  onSubmit() {
    const formData = this.customerForm.value;
    const customer = createCustomer({ ...formData });
    this.customerService.createCustomer(customer).subscribe();
  }
}
