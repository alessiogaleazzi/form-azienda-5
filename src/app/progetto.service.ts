import { Injectable } from '@angular/core';
import { FormProgetto } from './form-progetto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dati } from './dati';
@Injectable({providedIn: 'root'}) 
export class ProgettoService{
    constructor(private $http:HttpClient){}
    dati2:Dati[]= new Array();
testing(){
    this.$http.get<Dati[]>("http://jsonplaceholder.typicode.composts").subscribe((resp:Dati[])=>{resp.forEach((x)=>this.dati2.push(x))
    console.log(this.dati2)})}getDati(){return this.dati2}
    invia(dati:FormProgetto){console.log(dati);
    var obs = this.$http.post<FormProgetto>("http://jsonplaceholder.typicode.com/posts", dati)
    localStorage.setItem(dati.ma, JSON.stringify(dati) )
    return obs;
}
}
