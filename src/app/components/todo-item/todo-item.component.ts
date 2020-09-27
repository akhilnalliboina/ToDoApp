import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { todo } from 'src/app/models/todoclass';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() Todo: todo;
  @Output() deleteTodo: EventEmitter<todo> = new EventEmitter();

  constructor(private todoservice: TodoService) {
  }

  ngOnInit(): void {
  }
  // set css class 
  setClasses() {
    let classes = {
      ToDo: true,
      'is-complete': this.Todo.completed
    }
    return classes
  }
  // event toggle
  onTogle(Todo) {
    //make changes in UI
    Todo.completed = !Todo.completed;
    //make update to API
    this.todoservice.toggleCompleted(Todo).subscribe(res => console.log(res));
  }

  //when delete event is triggered
  onDelete(Todo) {
    console.log("delete event received")
    this.deleteTodo.emit(Todo);
  }
}
