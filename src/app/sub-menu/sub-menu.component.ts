import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit {

  constructor(
    private _actRoute : ActivatedRoute
  ) { }
    subMenuArr = [
      {
        id : 1, 
        menuId : 1, 
        name : "Daal Tadka",
        image : "",
        price : 120
      },
      {
        id: 2,
        menuId: 1,
        name: "Daal Makhani",
        image: "",
        price: 150
      },
      {
        id: 3,
        menuId: 1,
        name: "Daal Fry",
        image: "",
        price: 125
      },
      {
        id: 4,
        menuId: 2,
        name: "Naan",
        image: "",
        price: 25
      }

    ]
    subMenuDisplayArr:any=[];
    id:any;

  ngOnInit() {
    this._actRoute.paramMap.subscribe(params=>{
      // console.log(params.get("id"));
      this.id = params.get("id");
      this.subMenuArr.forEach((x, n)=>{
        if(x.menuId==parseInt(params.get("id"))){
          this.subMenuDisplayArr.push(this.subMenuArr[n]);
        }
      });
      console.log(this.subMenuDisplayArr);
    })
  }
  add(obj:any){
    // console.log("----");
    localStorage.setItem("items",JSON.stringify(obj));
  }
  

}
