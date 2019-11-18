import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProgettoService } from '../progetto.service';
import { FormProgetto } from '../form-progetto';
@Component({ 
    selector: 'app-form-progetto', 
    templateUrl: './form-progetto.component.html', 
    styleUrls: ['./form-progetto.component.css'] 
}) 
export class FormProgettoComponent implements OnInit { 
    constructor(
        private fb: FormBuilder, 
        private serv: ProgettoService
        ) {}
        progettoForm=this.fb.group({ 
            n:['', Validators.required], c: ['', Validators.required],e:['',[Validators.required, Validators.email]], na:['', [Validators.required, this.valEt]],cV:[''],dCh1:[false],dCh2:[false],dCh3:[false], dCh4:[false],dCh5:[false],dCh6:[false],dCh7:[false]
        }); 
        valEt(na:any){if(typeof na!==undefined){ var n=na.value;var b=new Date(n);var aDMs=Date.now()-b.getTime();var aDt=new Date(aDMs);var e=Math.abs(aDt.getUTCFullYear()-1970); if(e<=18){return{'invalidValue': "non sei maggiorenne"}}else{return null;}}} 
    ngOnInit(){
        imports:[FormBuilder,Validators,ProgettoService]} 
        invia(){var x=new FormProgetto() 
            x.n=this.progettoForm.get("n").value; x.c=this.progettoForm.get("c").value; x.ma=this.progettoForm.get("ma").value; x.na=this.progettoForm.get("na").value; x.dCh1=this.progettoForm.get("dCh1").value;x.dCh2=this.progettoForm.get("dCh2").value; x.dCh3=this.progettoForm.get("dCh3").value;x.dCh4=this.progettoForm.get("dCh4").value; x.dCh5=this.progettoForm.get("dCh5").value;x.dCh6=this.progettoForm.get("dCh6").value; x.dCh7=this.progettoForm.get("dCh7").value;x.dCh8=this.progettoForm.get("dCh8").value; this.serv.invia(x).subscribe(()=>{console.log("did")})}
        dCh8=0;
it(){var x = new FormProgetto()
    x.dCh1=this.progettoForm.get("dCh1").value;
if(x.dCh1==true){this.dCh8-=1;}else if(x.dCh1==false){this.dCh8+=1;}}
it2(){var x = new FormProgetto()
    x.dCh2=this.progettoForm.get("dCh2").value;
if(x.dCh2==true){this.dCh8-=1;}else if(x.dCh2==false){this.dCh8+=1;}}
it3(){var x = new FormProgetto()
    x.dCh3=this.progettoForm.get("dCh3").value;
if(x.dCh3==true){this.dCh8-=1;}else if(x.dCh3==false){this.dCh8+=1;}}
it4(){var x = new FormProgetto()
    x.dCh4=this.progettoForm.get("dCh4").value;
if(x.dCh4==true){this.dCh8-=1;}else if(x.dCh4==false){this.dCh8+=1;}}
it5(){var x = new FormProgetto()
    x.dCh5=this.progettoForm.get("dCh5").value;
if(x.dCh5==true){this.dCh8-=1;}else if(x.dCh5==false){this.dCh8+=1;}}
it6(){var x = new FormProgetto()
    x.dCh6=this.progettoForm.get("dCh6").value;
if(x.dCh6==true){this.dCh8-=1;}else if(x.dCh6==false){this.dCh8+=1;}}
it7(){var x = new FormProgetto()
    x.dCh7=this.progettoForm.get("dCh7").value;
if(x.dCh7==true){this.dCh8-=1;}else if(x.dCh7==false){this.dCh8+=1;}}}
