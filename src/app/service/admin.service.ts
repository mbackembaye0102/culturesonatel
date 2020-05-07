import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class AdminService {
  data(userdata: any) {
    throw new Error("Method not implemented.");
  }
  private urldata="data";
  public userdata:any;

  constructor(private http: HttpClient) { }
}
