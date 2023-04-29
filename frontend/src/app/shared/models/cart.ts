import { Product } from './product';

export interface Cart {
  userId: string;
  items: {
    productId?: string;
    name: Product;
    price: number;
    quantity: number;
    subTotalPrice: number;
  }[];
  totalPrice: number;
}
