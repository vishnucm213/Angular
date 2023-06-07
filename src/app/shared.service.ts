import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://127.0.0.1:8000/"

  constructor( private http:HttpClient) { }

  getStudentList():Observable<any>{
    return this.http.get<any[]>(this.APIUrl+ '/student/')
  }

  addStudentList(val:any){
    return this.http.post<any[]>(this.APIUrl+ '/student/', val)
  }

  updateStudentList(val:any){
    return this.http.put<any[]>(this.APIUrl+ '/student/', val)
  }

  deleteStudentList(val:any){
    return this.http.delete<any[]>(this.APIUrl+ '/student/'+ val)
  }


}
