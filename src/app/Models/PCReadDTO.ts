export class PCReadDTO{
    id?:number;
    bundleName?:string;
    totalPrice?:number;
    image?:string;
    products?:ProductReadInPC[];
 }

 export class ProductReadInPC{
   quantitiy?:number;
    name?:string;
    description?:string;
 }