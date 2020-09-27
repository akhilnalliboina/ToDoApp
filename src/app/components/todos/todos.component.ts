import { Component, OnInit } from '@angular/core';
import {TodoService} from 'src/app/services/todo.service'
import {todo} from 'src/app/models/todoclass'


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    //getting values
    this.todoService.getToDoList().subscribe(todo=>{this.todos=todo;});
  }
  addToDo(Todo:todo){
    //adding new todo
    this.todoService.addCompleted(Todo).subscribe(Todo=>{this.todos.push(Todo)});
  }
  deleteToDo(Todo:todo){
    //remove from UI
    this.todos=this.todos.filter(t=>t.id!==Todo.id);
    //Delete in API
    this.todoService.deleteCompleted(Todo).subscribe();
  }
}
