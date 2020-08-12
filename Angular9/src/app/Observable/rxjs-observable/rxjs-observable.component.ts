import { Component, OnInit,AfterViewInit,ViewChild,ElementRef} from '@angular/core';
import {interval,Observable,fromEvent,of} from 'rxjs';

// interval(5000).subscribe(res=>{
//   console.log(res,'will execute the code in every 5 secds here res will give the iteration 0 1 2 3 4....');
// });
@Component({
  selector: 'app-rxjs-observable',
  templateUrl: './rxjs-observable.component.html',
  styleUrls: ['./rxjs-observable.component.scss']
})
export class RxjsObservableComponent implements OnInit,AfterViewInit {
  @ViewChild('btn',{static:true}) button:ElementRef;
  constructor() { }
  ngOnInit(){
    console.log( of(1, 2, 3));
  }
  ngAfterViewInit(){
    
    fromEvent(this.button.nativeElement,'mousemove').subscribe(res=>{
      console.log(res);
    })
  }
 
}
