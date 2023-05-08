export class AddressInsertDTO {
  constructor(public apartementNumber: string,public  floorNumber: number,
    public streetName:string,public area:string,
    public zipCode:string,public nearestLandmark:string,
    public  cityId:number,public userId:String ){}


}



// apartementNumber,floorNumber,streetName,area,zipCode,nearestLandmark,cityId,userId
