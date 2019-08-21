import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';
import { InvoicePdfPreviewComponent } from './components/invoice-pdf-preview/invoice-pdf-preview.component';
import { AppRoutingModule } from './app-routing.module';
import { InvoiceTemplateComponent } from './components/invoice-template/invoice-template.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceFormComponent,
    InvoicePdfPreviewComponent,
    InvoiceTemplateComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
