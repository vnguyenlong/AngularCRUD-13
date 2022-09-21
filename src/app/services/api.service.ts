import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) {}

  postProduct(data: any){
    const url = 'http://localhost:3000/productList'
    return this.http.post<any>(url, data);
  }

  getProduct(){
    const url = 'http://localhost:3000/productList'
    return this.http.get<any>(url);
  }

  putProduct(data: any, id : number){
    const url = 'http://localhost:3000/productList/'
    return this.http.put<any>(url + id , data)
  }

  deleteProduct(id : number){
    const url = 'http://localhost:3000/productList/'
    return this.http.delete<any>(url + id)
  }
}
