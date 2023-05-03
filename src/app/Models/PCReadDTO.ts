export class PCReadDTO{
    id?:number;
    bundleName?:string;
    totalPrice?:number;
    image?:string;
    addedToCart?: boolean;
    products?:ProductReadInPC[];
 }

 export class ProductReadInPC{
   productId?:number;
   quantitiy?:number;
    name?:string;
    description?:string;
 }