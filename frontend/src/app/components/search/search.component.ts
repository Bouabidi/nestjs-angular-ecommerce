import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchTerm = '';
  products: Product[] = [];
  Allproducts: Product[] = [];

  constructor(
    private http: HttpClient,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  search(value: string): void {
    this.productService.searchProducts(value).subscribe((res: any) => {
      console.log(res);
      this.products = [...this.products, ...res];
    });
  }

  private getProducts() {
    this.productService.getAllProducts().subscribe((res: any) => {
      console.log(res);
      this.Allproducts = [...this.products, ...res];
    });
  }
}
