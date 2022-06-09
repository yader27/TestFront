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
    headers.set('content-type', 'application/json')
    headers.set('Access-Control-Allow-Origin', '*')
    return this.http.get(url,{headers})
  }

  getPropertiesImg(id:string){
    let url = `https://rtapi-7h6urepkoq-ue.a.run.app/images/${id}`
    const headers= new HttpHeaders()
    headers.set('content-type', 'application/json')
    headers.set('Access-Control-Allow-Origin', '*')
    return this.http.get(url,{headers})
  }

}
