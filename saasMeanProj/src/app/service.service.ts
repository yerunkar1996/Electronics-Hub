import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }


  // Method for get api
  ongetDbData(){
    return this.http.get("http://localhost:3000/getProduct")
  }

  // Method for post api
  postUrl = "http://localhost:3000/addProd"
  addDataToDb(FormData:any){
    return this.http.post(this.postUrl,FormData)
  }


  // Method for delete api
  deleteUrl = "http://localhost:3000/deleteProduct"
  deleteDatafromDb(prodName:any){
    return this.http.delete(`${this.deleteUrl}/${prodName}`)
  }

  // Method for put api
  putUrl = "http://localhost:3000/updateProd"
  updateDatafromDb(formData:any,id:any){
    return this.http.put(`${this.putUrl}/${id}`,formData)
  }


}
