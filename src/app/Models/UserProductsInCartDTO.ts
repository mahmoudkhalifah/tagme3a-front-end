
export interface UserProductsInCart {
  UserId: string;
  productReadDtos:  ProductReadDto[]
}

interface ProductReadDto
{

  Id :number
  Name :string
  Description:string
  Price:number
  Discount?:number
  UnitInStocks?:number
  BrandID:number
  CategoryID?:number
  ProductImages:string[]
}
