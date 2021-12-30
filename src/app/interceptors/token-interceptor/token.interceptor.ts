import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { combineLatest, concatMap, Observable } from 'rxjs';
import { Select } from '@ngxs/store';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  @Select((e) => e.auth.token) token: Observable<string>;
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const a = this.token.pipe(
      concatMap((e) => {
        if (!e) return next.handle(request);
        const tokenNizedquest = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + e) });
        return next.handle(tokenNizedquest);
      })
    );

    return a;
  }
}
