export class Product {
    id?: number;
    name?: string;
    description?: string;
    price?: number;
    discount? : number;
    unitInStocks?: number;
    categoryID?: number;
    productImages?: ProductImage[];
    brandID? : number

  }
  export class ProductImage {
    id!: number;
    data!: Uint8Array;
    contentType!: string;
    altText?: string;
  }

  
