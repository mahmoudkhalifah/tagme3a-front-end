export class BrandInsert {
  constructor(Name: string, Description: string);
  constructor(Name: string, Description: string, Logo: string);
  constructor(public Name: string, public Description: string, public Logo?: string) {
    // implementation details
  }
}
