import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private _actRoute : ActivatedRoute,
    private _router : Router,
    ) { }
  allMenu=[
    {
      id : 1,
      menuId : 1,
      name : "Dall",
      image : "./assets/menu/1.jpg"
    },
    {
      id : 2,
      menuId : 1,
      name : "Chapati",
      image: "./assets/menu/2.jpeg"
    },
    {
      id : 3,
      menuId : 2,
      name : "Chiken",
      image: "./assets/menu/3.jpeg"
    },
    {
      id : 4,
      menuId : 3,
      name : "Burger",
      image: "./assets/menu/1.jpg"
    }
  ];

  displayMenu:any=[];

  // id:any;


  ngOnInit() {
    this._actRoute.paramMap.subscribe(params=>{
      // console.log(params.get("id"))
      // this.id = params.id("id");
      let id = params.get("id");
      this.allMenu.forEach((x, n)=>{
        if(x.menuId == parseInt(id)){
          this.displayMenu.push(this.allMenu[n]);
          // console.log(this.allMenu[n]);
        }
      })
      // console.log(this.displayMenu);
    })
    if(localStorage.getItem("items")){
      let items = localStorage.getItem("items");
      console.log(items);
    }




  }

  subMenu(a:any){
    // console.log(a);
    this._router.navigate(["/submenu/"+a.id]);
  }

}
