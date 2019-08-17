import { Injectable } from '@angular/core';

import { Invoice } from '../models/Invoice';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  invoice: Invoice;

  constructor() {}

  get(): Invoice {
    return this.invoice;
  }

  save(invoice: Invoice): void {
    this.invoice = invoice;
  }
}
