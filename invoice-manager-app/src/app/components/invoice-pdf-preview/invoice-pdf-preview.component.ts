import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-pdf-preview',
  templateUrl: './invoice-pdf-preview.component.html',
  styleUrls: ['./invoice-pdf-preview.component.css'],
})
export class InvoicePdfPreviewComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  save() {
    window['html2canvas'] = html2canvas;
    const doc = new jsPDF('p', 'pt', 'a4');
    const savePdf = () => doc.save('invoice.pdf');
    doc.html(document.querySelector('#pdf'), {
      callback: savePdf,
    });
  }

  cancel() {
    this.router.navigate(['/invoice']);
  }
}
