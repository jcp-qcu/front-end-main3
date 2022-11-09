import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {


    constructor() { }
  
    ngOnInit(): void {
    }
  
    count: number = 0;
    counter(action:string){
      if(action === '+')
      {
        this.count++;
      }
      else if(action === '-')
      {
        this.count--;
      }
      else{
        this.count = 0;
      }
    }
  }
