import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  topStories:any;



  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };


  constructor(private _router : Router){
    this.topStories = [
      { title: "Exploring San Francisco", author: "Rea Ramsey", body: "", picture: "./assets/1.jpg" },
      { title: "Coffee the right way", author: "Ellesha Hartley", body: "", picture: "./assets/2.jpeg" },
      { title: "Best Hiking In Yosemite", author: "Vinnie Alexander", body: "", picture: "./assets/3.jpeg" }
    ]

  
  }

  menu(id:any){
    this._router.navigate(["/menu/"+id]);
  }
}
