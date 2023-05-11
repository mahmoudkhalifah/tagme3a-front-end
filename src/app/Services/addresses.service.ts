import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class AddressesService {

  constructor(private Client:HttpClient ) { }
  private URL=Constants.apiBaseUrl+"Addresses";

  PostAddress<AddressInsertDTO>(Address:AddressInsertDTO)
  {
    return this.Client.post(this.URL,Address);
  }

  getaddressIDByUID(UID:string)
  {
    return this.Client.get(this.URL+"getAddressID?UID="+UID);
  }
  // https://localhost:7004/api/Addresses/GetAddressesByUID?ID=7c1b7ab9-1cbb-4ea7-b7ae-ddff5b5487e3

  getAddressesbyUID(UID:string)
  {
    return this.Client.get(this.URL+"GetAddressesByUID?ID="+UID);

  }

}
