import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PCReadDTO } from '../Models/PCReadDTO';
import { PCInsertDTO } from '../Models/PCInsertDTO';
import { PrdPCDTO } from '../Models/PrdPcDTO';
import { PCReadDetailsDTO } from '../Models/PCReadDetailsDTO';
import { PrdPCUpdateDTO } from '../Models/PrdPCUpdateDTO';

@Injectable({
  providedIn: 'root'
})
export class PCServiceService {

  constructor(private client :HttpClient) { }
  private URL = "https://localhost:7004/api/PCs";


  getAllPCs(){
      return this.client.get<PCReadDTO[]>(this.URL);
  }

  getPCById(id:any){
    return this.client.get<PCReadDetailsDTO>(this.URL+'/'+id);
  }

  updatePCById(id:any , pc:any){
      return this.client.put<PCInsertDTO>(this.URL+'/'+id , pc);
  }

  addPC(pc:PCInsertDTO){
    return this.client.post<PCInsertDTO>(this.URL , pc);
  }

  addPrdPc(prd:any){
    return this.client.post<PrdPCDTO>(this.URL+"/InsertProductPc" , prd);
  }

  DeletePCComponent(id:any){
    return this.client.delete(this.URL+"/"+id);
  }

  updateprdpc(id:any , prdPc:any){
    return this.client.put<PrdPCUpdateDTO>(this.URL+"/UpdateProductPc/"+id , prdPc);
  }

  deletePrdPC(id:any , prdPc:any){
    return this.client.delete(this.URL + "/DeletePrdPC/"+id , {body:prdPc});
  }
}

