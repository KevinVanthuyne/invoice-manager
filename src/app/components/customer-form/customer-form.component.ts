import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerType, createCustomer } from 'src/app/models/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],
})
export class CustomerFormComponent implements OnInit {
  private customerForm: FormGroup;
  private customerTypes: String[];

  constructor(
    private customerService: CustomerService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    // TODO get customer number from backend
    this.customerTypes = Object.values(CustomerType);
    this.buildForm();
  }

  buildForm() {
    this.customerForm = this.formBuilder.group({
      customerNumber: [],
      type: [],
      name: [],
      email: [],
      bankAccount: [],
      street: [],
      houseNumber: [],
      zipCode: [],
      city: [],
      phoneNumber: [],
    });
  }

  onSubmit() {
    const formData = this.customerForm.value;
    const customer = createCustomer({ ...formData });
    this.customerService.createCustomer(customer).subscribe(response => {
      alert(`${response.status}: ${response.message}`);
      this.router.navigate(['/invoice-form']);
    });
  }
}
