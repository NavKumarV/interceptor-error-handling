import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('request', request);
    console.log('next', next);
    const headers = new HttpHeaders().set('access-token', 'token ahasssssssssssssssssssssssssssss');

    const apiRequest = request.clone({ headers });
    return next.handle(apiRequest).pipe(
      retry(2),
      catchError((e: HttpErrorResponse) => {
        alert(e.name + '=' + e.message);
        return throwError(e);
      })
    );

  }
}
