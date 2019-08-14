import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public product = [];

  token: string;

  constructor(
    private productService: ProductService,
    ) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => this.product = data);
    if (sessionStorage.getItem("token")) {
      this.token=sessionStorage.getItem("token");
    }
  }

}
