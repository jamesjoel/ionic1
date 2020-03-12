import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private _actRoute : ActivatedRoute) { }
  allMenu=[
    {
      id : 1,
      menuId : 1,
      name : "Dall",
      image : "./assets/menu/dall.jpg"
    },
    {
      id : 2,
      menuId : 1,
      name : "Chapati"
    },
    {
      id : 3,
      menuId : 2,
      name : "Chiken"
    },
    {
      id : 4,
      menuId : 3,
      name : "Burger"
    }
  ];

  displayMenu:any=[];




  ngOnInit() {
    this._actRoute.paramMap.subscribe(params=>{
      // console.log(params.get("id"))
      let id = params.get("id");
      this.allMenu.forEach((x, n)=>{
        if(x.menuId == parseInt(id)){
          this.displayMenu.push(this.allMenu[n]);
          // console.log(this.allMenu[n]);
        }
      })
      console.log(this.displayMenu);
    })
  }

}
