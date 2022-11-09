import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isSideNavCollapsed = false;
  screenWidth = 0;
  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  constructor(public router : Router) { 
   router.navigate(["/","converter"]);
  }

  ngOnInit(): void {
  }
  converter(){
    this.router.navigate(["/user/","converter"]);
  }

}
