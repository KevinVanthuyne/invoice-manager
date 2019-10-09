import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';
import { InvoicePdfPreviewComponent } from './components/invoice-pdf-preview/invoice-pdf-preview.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/invoice-form', pathMatch: 'full' },
  { path: 'invoice-form', component: InvoiceFormComponent },
  { path: 'invoice-preview', component: InvoicePdfPreviewComponent },
  { path: 'customer-form', component: CustomerFormComponent },
  { path: 'expense-form', component: ExpenseFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
