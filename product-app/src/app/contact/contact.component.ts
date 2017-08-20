import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LikeService, Message } from "../shared/like.service";

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  address: any;

  @ViewChild("para1")
  para1: ElementRef;

  @ViewChild("name")
  name: ElementRef;

  contactLikes: number = 10;

  constructor(private likeService: LikeService) { 
    console.log('ContactComponent Created...');
  }

  //view is initialized
  ngOnInit() {
    //native element is real dom element
    this.para1.nativeElement.textContent = "From TS";
    this.name.nativeElement.value = "Name From TS";
   
    this.likeService.likesSubject
    .subscribe ( (message: Message) => {
      this.contactLikes = message.likes;
      console.log("contact subs called");
    })

    
  }

  showPara1(): void {
    this.para1.nativeElement.textContent = "From TS.....";
    this.name.nativeElement.value = "Name From TS.......";
  }

}
