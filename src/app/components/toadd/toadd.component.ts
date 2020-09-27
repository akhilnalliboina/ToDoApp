import { Component, OnInit,EventEmitter,Output } from '@angular/core';


@Component({
  selector: 'app-toadd',
  templateUrl: './toadd.component.html',
  styleUrls: ['./toadd.component.css']
})
export class ToaddComponent implements OnInit {
  @Output() addRequest = new EventEmitter<any>();
title:string;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    //create a object
    const todo={
      title:this.title,
      completed:false
    }
    this.addRequest.emit(todo);
  }

}
