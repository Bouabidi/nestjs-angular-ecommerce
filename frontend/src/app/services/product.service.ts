import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = environment.ApiUrl + '/product';

  constructor(private httpClient: HttpClient) {}

  getAllProducts() {
    return this.httpClient.get(this.baseUrl);
  }

  getProduct(theProductId: number) {
    return this.httpClient.get(`http://localhost:3000/product/${theProductId}`);
  }


  searchProducts(theKeyword: string) {
    return this.httpClient.get(`http://localhost:3000/product/query?query=${theKeyword}`);
  }

 

}
