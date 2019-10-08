import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';

import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-invoice-pdf-preview',
  templateUrl: './invoice-pdf-preview.component.html',
  styleUrls: ['./invoice-pdf-preview.component.css'],
})
export class InvoicePdfPreviewComponent implements OnInit {
  constructor(private router: Router, private invoiceService: InvoiceService) {}

  ngOnInit() {}

  save() {
    this.invoiceService.saveToBackend().subscribe();

    window['html2canvas'] = html2canvas;
    const doc = new jsPDF('p', 'pt', 'a4');
    const savePdf = () => doc.save(`${this.invoiceService.getFilename()}`);

    // pdf depends on size of client window and zoom
    // TODO shouldn't be the case: whatever size the preview is displayed on the website,
    // the resulting pdf should always be the correct size

    // 100% zoom = 593px width, 839px height

    doc.html(document.querySelector('#pdf'), {
      callback: savePdf,
    });
  }

  cancel() {
    this.router.navigate(['/invoice-form']);
  }
}
