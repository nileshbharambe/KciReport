import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Model } from 'src/app/model';

@Component({
  selector: 'app-model-item',
  templateUrl: './model-item.component.html',
  styleUrls: ['./model-item.component.css']
})
export class ModelItemComponent {

  @Input()
  model!: Model;

  @Output() modelDelete: EventEmitter<Model> = new EventEmitter();
  

  onClick(model: Model){
   console.log("onClick has been triggered");
    this.modelDelete.emit(model)
  
  }
}
