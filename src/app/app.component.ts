import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weekdays';

  testingVs:boolean=true;
  enabledButton:boolean=true;
  
  weekdaysList:string[]=[];
  
  onAdd(enteredValue:string){
	  console.log('invoked onAdd');
	  console.log('Entered value:'+enteredValue);
	  this.weekdaysList.push(enteredValue);
	  console.log('List Size:'+this.weekdaysList.length);
	  
  }
  
  onRemove(day:string){
	  console.log('invoked onRemove');
	  console.log('Day to remove:'+day);
	  let index=this.weekdaysList.indexOf(day);
	  console.log('index:'+index);
	  this.weekdaysList.splice(index,2);
	  
	  
  }
  onRemoveWithIndex(index:number){
	  console.log('invoked onRemoveWithIndex:'+index);
  }
  
  onRemoveAll(){
	  console.log('invoked onRemoveAll');
	 
		  this.weekdaysList=[];
	    
  }
}
