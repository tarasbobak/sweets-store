import { OpaqueToken } from '@angular/core';

import { IAppConfig } from './';

export let APP_CONFIG: OpaqueToken = new OpaqueToken('app.config');

export const appConfig: IAppConfig = {
  clientId: 'hRNbvZF2gqmgBZE05MZKpLZ6eUXJG9pnvBQ5zQIo7C',
  lSAccessTokenLabel: 'access_token',
  productsEndpoint: 'https://api.molt.in/v1/products'
};
