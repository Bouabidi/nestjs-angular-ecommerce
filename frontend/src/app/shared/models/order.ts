import { Product } from "./product";
import { User } from "./user";

export interface Order {
    _id?: string;
	paymentMethod: string;
	taxPrice: number;
	shippingPrice: number;
	totalPrice: number;
	isPaid: boolean;
	paidAt: Date;
	isDelivered: boolean;
	deliveredAt: Date;
	user: User;
	orderItems: Product[];
	shippingAddress: string;
	createdAt: Date;
	updatedAt: Date;
  }