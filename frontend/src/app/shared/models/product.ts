export interface Product {
    _id : string;
    name: string;
    image: string[];
    shortDescription: string;
    longDescription: string;
    price: {
        reseller: number;
        uvp: number;
        discount: number
    };
	rating: {
        count: number;
        avg: number;
    };
    inStock: boolean;
  }