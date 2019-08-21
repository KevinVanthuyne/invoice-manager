import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Customer } from '../models/customer';
import { JsonResponse } from '../models/jsonResponse';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private customerApiUrl = 'http://localhost:3000/api/customers';

  constructor(private http: HttpClient) {}

  getAllCustomers(): Observable<JsonResponse> {
    return this.http.get<JsonResponse>(this.customerApiUrl);
  }
}
