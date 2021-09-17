import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private messageService: MessageService) {}

  pushError(error: HttpErrorResponse): void {
    this.messageService.add({
      severity: 'error',
      summary: error.statusText,
      detail: `${error.message} ${error.error?.message}`,
    });
  }
  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    this.pushError(error);
    // Return an observable with a user-facing error message.
    return throwError(error.message);
  }
}
