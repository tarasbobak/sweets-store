import { Injectable, Inject } from '@angular/core';

import { APP_CONFIG, IAppConfig } from '../config';

@Injectable()
export class AccessTokenService {
  private token = '';

  constructor(@Inject(APP_CONFIG) private config: IAppConfig) { }

  getToken() {
    return this.token || localStorage.getItem(this.config.lSAccessTokenLabel);
  }
}
