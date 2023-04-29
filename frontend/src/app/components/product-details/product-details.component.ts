import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  id:any;
  product: Product | undefined;
  images: string[] | undefined = [];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
    ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getProduct();
    this.images = this.product?.image;
  }

  private getProduct() {
    this.productService.getProduct(this.id).subscribe((product:any) => {
      this.product = product;
    });
  }
}
