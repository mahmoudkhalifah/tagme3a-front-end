export class PostOrder {
    constructor(public addressID: number,public  bill: number,
      public orderDate:Date,public shippingDate:Date,
      public arrivalDate:Date,public orderState:number,
      public  payMethod:number,public userId:String ){}


      // constructor(public addressID: number,public  bill: number,
      //   public orderDate:string,public shippingDate:string,
      //   public arrivalDate:string,public orderState:number,
      //   public  payMethod:number,public userId:String ){}

}

// "addressID": 0,
// "bill": 0,
// "orderDate": "2023-04-29T23:48:20.701Z",
// "shippingDate": "2023-04-29T23:48:20.701Z",
// "arrivalDate": "2023-04-29T23:48:20.701Z",
// "orderState": 1,
// "payMethod": 0,
// "userId": "string"
