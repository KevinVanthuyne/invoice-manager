import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JsonResponse } from '../models/jsonResponse';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getAllCustomers(): Observable<JsonResponse> {
    return this.http.get<JsonResponse>(`${environment.apiUrl}/customers`);
  }
}
