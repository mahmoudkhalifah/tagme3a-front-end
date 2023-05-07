export interface CategoryDTO {
  categoryId: number;
  name: string;
  description: string;
  image:string;
  inJourneyMode?:boolean;
  orderForJourneyMode?:number;
}

