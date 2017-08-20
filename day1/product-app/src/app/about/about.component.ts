import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  members: string[] = ["Member 1","Member 2"];
  show: boolean = true;
  startDate: Date = new Date();

  toggle(event: Event){
    this.show = !this.show;
    console.log("event-->:"+event);
  }

  constructor() { }

  ngOnInit() {
  }

  onEnter(): void {
    console.log("mouse enter");
  }
}
