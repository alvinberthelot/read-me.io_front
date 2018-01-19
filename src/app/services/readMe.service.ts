import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ReadMe{

  private url: string = "http://localhost:3000/api";

  constructor(private http: HttpClient){
  }

  getVersion(){
    let request = `${this.url}/version`;
    return this.http.get(request);
  }

  getTemplates(){
    let request = `${this.url}/templates`;
    return this.http.get(request)
      .map((res: any) => res.results);
  }

  getExtention(){
    let request = `${this.url}/extention`;
    return this.http.get(request)
      .map((res: any) => res.results);
  }
}