import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';
import { InvoicePdfPreviewComponent } from './components/invoice-pdf-preview/invoice-pdf-preview.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceFormComponent,
    InvoicePdfPreviewComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
