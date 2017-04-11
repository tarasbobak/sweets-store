import { AccessTokenService } from './access-token.service';
import { GenericHttpService } from './generic-http.service';
import { ProductsApiService } from './products-api.service';

export * from './access-token.service';
export * from './generic-http.service';
export * from './products-api.service';

export const APP_SERVICES: any[] = [
  AccessTokenService,
  GenericHttpService,
  ProductsApiService
];
