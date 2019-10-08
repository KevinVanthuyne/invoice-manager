import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonResponse } from '../models/jsonResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  constructor(private http: HttpClient) {}

  getAllExpenseTypes(): Observable<JsonResponse> {
    return this.http.get<JsonResponse>(`${environment.apiUrl}/expenses`);
  }

  getExpense(expenseId: String): Observable<JsonResponse> {
    return this.http.get<JsonResponse>(
      `${environment.apiUrl}/expenses/${expenseId}`
    );
  }
}
