import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';
import { InvoicePdfPreviewComponent } from './components/invoice-pdf-preview/invoice-pdf-preview.component';

const routes: Routes = [
  { path: '', redirectTo: '/invoice', pathMatch: 'full' },
  { path: 'invoice', component: InvoiceFormComponent },
  { path: 'invoice-preview', component: InvoicePdfPreviewComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
