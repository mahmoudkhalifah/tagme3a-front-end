export interface PCReadDetailsDTO{
    id:number;
    bundleName:string;
    totalPrice:number;
    image:string;
    products:ProductReadDetailsInPCDTO[];
}

export interface ProductReadDetailsInPCDTO{
    productId:number;
    quantitiy:number;
    name:string;
    description:string;
    price:number;
    image:string;
    categoryName:string;
    brandName:string;
}