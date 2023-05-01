
export interface UserProductsInCart {
  UserId: string;
  productReadDtos:  ProductReadDto[]
}

interface ProductReadDto
{
  userId:string
  id :number
  name :string
  description:string
  price:number
  discount?:number
  unitInStocks?:number
  brandID:number
  categoryID?:number
  productImages:string[]
}
