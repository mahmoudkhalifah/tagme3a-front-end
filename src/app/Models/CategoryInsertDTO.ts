// export class CategoryInsert
// {
//   constructor(Name: string, Description: string);
//   constructor(Name: string, Description: string, Image: string);
//   constructor(public Name: string, public Description: string
//     , public Image?: string,public inJourneyMode:boolean,orderForJourneyMode?:number) {
//     // implementation details
//   }
 /* Name: string;
  Description: string
  Image:string
  constructor(Name: string,Description:string,Image: string) {
    this.Image = Image;
    this.Description = Description;
    this.Name = Name;
}*/
//}
export class CategoryInsert {
  constructor(name: string, description: string);
  constructor(name: string, description: string, image: string);
  //constructor(name: string, description: string,inJourneyMode?: boolean,orderForJourneyMode?: number);

  constructor(name: string, description: string, image: string,inJourneyMode?: boolean,orderForJourneyMode?: number);
  constructor(
    public name: string,
    public description: string,
    public image?: string,
    public inJourneyMode?: boolean,
    public orderForJourneyMode?: number
  ) {
    // implementation details
  }
}
