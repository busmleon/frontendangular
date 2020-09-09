import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpResponse, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { KeycloakService } from '../keycloak/keycloak.service';
import { tap, switchMap } from 'rxjs/operators';


@Injectable()
export class RefreshTokenService implements HttpInterceptor {

  constructor(private httpClient: HttpClient) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return from(KeycloakService.refreshJWT()).pipe(
      switchMap(token => {
        const headers = req.headers.set('Authorization', 'Bearer ' + token);
        const requestClone = req.clone({ headers });
        return next.handle(requestClone);
      })
    );
  }
}
