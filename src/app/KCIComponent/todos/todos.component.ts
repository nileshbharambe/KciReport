import { Component, OnInit } from '@angular/core';
import { Model } from "../../model";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent{

  model: Model[] = [];

  constructor() { 
    this.model = [
      {
        firstName:"Nilesh",
        lastName:"Bharambe"
      },
      {
        firstName:"Pooja",
        lastName:"Bharambe"
      }
    ]
  }

deleteModel(model:Model){
  console.log(model);
}
  
}
