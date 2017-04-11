import { Injectable, Inject } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { AccessTokenService } from './access-token.service';
import { GenericHttpService } from './generic-http.service';
import { APP_CONFIG, IAppConfig } from '../config';

@Injectable()
export class ProductsApiService {
  constructor(@Inject(APP_CONFIG) private config: IAppConfig,
      private accessTokenService: AccessTokenService,
      private genericHttpService: GenericHttpService) { }

  getAllProducts(): Observable<any> {
    const token = this.accessTokenService.getToken();
    const headers = new Headers({ 'Authorization': `Bearer ${token}` });
    const options = new RequestOptions({ headers });

    return this.genericHttpService.get(this.config.productsEndpoint, options);
  }
}
