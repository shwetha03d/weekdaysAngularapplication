import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  @Input()
  mood:string="Happy";
  alive:boolean=true;

  constructor() { }

  ngOnInit() {
  }

}
