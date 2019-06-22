import { Component, OnInit } from '@angular/core';

  import {Country} from '../country';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  country:Country=new Country(1,"india",91);

  constructor() { }

  ngOnInit() {
  }

  onClick(id:number,name:string,code:number){
    console.log('invoked onClick');
    console.log('country id:'+id);
    console.log('country name:'+name);
    console.log('country code:'+code);

    this.country=new Country(id,name,code);
    console.log('Country:'+this.country);
    
  }

get display(){
  return JSON.stringify(this.country);
}

}
