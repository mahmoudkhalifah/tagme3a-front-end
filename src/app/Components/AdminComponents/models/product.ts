export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discount: number;
  unitInStocks: number;
  categoryID: number;
  productImages: string[];
  brandID: number;

  constructor(
    id: number,
    name: string,
    description: string,
    price: number,
    discount: number,
    unitInStocks: number,
    categoryID: number,
    brandID: number,
    productImages: string[]
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.discount = discount;
    this.unitInStocks = unitInStocks;
    this.categoryID = categoryID;
    this.brandID = brandID;
    this.productImages = productImages;
  }
}
// export class Product{
// constructor(public id: number, public name: string, public description: string,
//   public price: number,public discount: number,public unitInStocks: number,
//   public categoryID: number,public brandID: number,public productImages: string[],
//   ) {
//   // implementation details
// }
// }
/*export class Product {
    id?: number;
    name?: string;
    description?: string;
    price?: number;
    discount? : number;
    unitInStocks?: number;
    categoryID?: number;
    productImages?: string[];
    brandID? : number
    constructor()
    {

    }
  }
  export class ProductImage {
    id!: number;
    data!: Uint8Array;
    contentType!: string;
    altText?: string;
  }*/


