import { Component, OnInit } from '@angular/core';

import { ProductsApiService } from '../core/services';

@Component({
  selector: 'ss-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productsApiService: ProductsApiService) { }

  ngOnInit() {
    this.productsApiService.getAllProducts().subscribe(function(products) {
      console.log(products);
    });
  }

}
