import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const toastr = inject(ToastrService);

  // Attach token if it exists
  const token = localStorage.getItem('auth_token');
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  // Prepend base API URL for relative paths
  if (req.url.startsWith('/')) {
    req = req.clone({
      url: environment.apiUrl + req.url,
    });
  }

  return next(req).pipe(
    catchError((error) => {
      const message = error?.error?.message || 'An error occurred. Please try again.';
      toastr.error(message, 'Error');
      return throwError(() => error);
    })
  );
};
