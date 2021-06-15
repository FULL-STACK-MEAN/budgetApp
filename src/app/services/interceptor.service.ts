import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let request;
    if(localStorage.getItem('token')) {
      const token = localStorage.getItem('token') + '';
      request = req.clone({
        setHeaders: {authorization: token},
        withCredentials: true
      })
    } else {
      request = req.clone({
        withCredentials: true
      })
    }

    return next.handle(request)
               .pipe(
                  tap((event: HttpEvent<any>) => {
                    if(event instanceof HttpResponse && event.status === 200) {
                      console.log('Usuario autenticado')
                    }
                  }),
                  catchError((err: HttpErrorResponse) => {
                    if(err.status === 403) {
                      this.router.navigate(['/login']);
                    }
                    return throwError(err)
                  })
               )
  
  }


}
