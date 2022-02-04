import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem('token');

    if (!token) {
      token = this.generateToken();
      localStorage.setItem('token', token);
    }

    request = request.clone({
      setHeaders: {
        Authorization: token,
      },
    });

    return next.handle(request);
  }

  private generateToken(): string {
    return Math.random().toString(36).substring(2, 12);
  }
}
