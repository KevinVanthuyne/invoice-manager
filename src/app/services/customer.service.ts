import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JsonResponse } from '../models/jsonResponse';
import { environment } from 'src/environments/environment.prod';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getAllCustomers(): Observable<JsonResponse> {
    return this.http.get<JsonResponse>(`${environment.apiUrl}/customers`);
  }

  createCustomer(customer: Customer): Observable<JsonResponse> {
    return this.http.post<JsonResponse>(
      `${environment.apiUrl}/customers`,
      customer
    );
  }
}
