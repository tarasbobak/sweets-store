import { Component } from '@angular/core';
import { ProductsApiService } from './core/services/products-api.service';

@Component({
  selector: 'ss-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private productsApi: ProductsApiService) {}
}
