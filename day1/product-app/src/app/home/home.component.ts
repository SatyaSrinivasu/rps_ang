import { Component, OnInit } from '@angular/core';
import { LikeService } from "../shared/like.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeLikes: number = 1000;

  constructor(private likeService: LikeService) { 
    console.log('HomeComponent Created...');
  }

  ngOnInit() {
    this.homeLikes = this.likeService.homeLikes;
    setInterval(()=>{
      //this.homeLikes += 10;
      this.likeService.homeLikes += 10; 
    },3000);
  }

}
