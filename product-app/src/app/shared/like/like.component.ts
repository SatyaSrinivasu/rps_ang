import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input()
  count: number = 0;

  @Input("like-title")
  title: string = '';

  @Output()
  countChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  step(value: number){
    //this.count += value;
    this.countChange.emit(this.count + value);
  }

}
