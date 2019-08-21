import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Invoice } from '../models/Invoice';
import { JsonResponse } from '../models/jsonResponse';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  invoice: Invoice;

  constructor(private http: HttpClient) {}

  get(): Invoice {
    return this.invoice;
  }

  getNextId(): Observable<JsonResponse> {
    return this.http.get<JsonResponse>(`${environment.apiUrl}/invoices/nextId`);
  }

  save(invoice: Invoice): void {
    this.invoice = invoice;
  }

  saveToBackend(): Observable<JsonResponse> {
    return this.http.post<JsonResponse>(
      `${environment.apiUrl}/invoices`,
      this.invoice
    );
  }
}
