export class CategoryInsert
{
  constructor(Name: string, Description: string);
  constructor(Name: string, Description: string, Image: string);
  constructor(public Name: string, public Description: string, public Image?: string) {
    // implementation details
  }
 /* Name: string;
  Description: string
  Image:string
  constructor(Name: string,Description:string,Image: string) {
    this.Image = Image;
    this.Description = Description;
    this.Name = Name;
}*/
}
