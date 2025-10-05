import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../services/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                try {
                    if (this.authenticationService && this.authenticationService.logout) {
                        this.authenticationService.logout();
                    } else {
                        console.warn('AuthenticationService not available, clearing localStorage manually');
                        localStorage.removeItem('authToken');
                        localStorage.removeItem('currentUser');
                    }
                } catch (logoutError) {
                    console.error('Error during logout:', logoutError);
                    localStorage.removeItem('authToken');
                    localStorage.removeItem('currentUser');
                }
                
                // Redirect to login page
                window.location.href = '/account/login';
            }
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}
