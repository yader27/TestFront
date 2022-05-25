import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  constructor( private http:HttpClient) { }

  getProperties(){
    let url = 'https://rtapi-7h6urepkoq-ue.a.run.app/properties'
    const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
    return this.http.get(url,{headers})
  }
}
