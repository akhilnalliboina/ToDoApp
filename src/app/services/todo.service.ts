import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { todo } from '../models/todoclass';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit:string = '?_limit=5';

  constructor(private http:HttpClient) { }
// get todo list
  getToDoList():Observable<todo[]>{
    return this.http.get<todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }
  // method to send toggled signal
  toggleCompleted(todo:todo):Observable<any> {
    const url= `${this.todosUrl}/${todo.id}`;
    return this.http.put(url,todo,httpOptions);
  } 
  // method to delete
  deleteCompleted(todo: todo):Observable<todo>  {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<todo>(url,httpOptions);
  }
  //method to add 
  /** POST: add a new todo to the Api */
  addCompleted(todo: todo): Observable<todo> {
  return this.http.post<todo>(this.todosUrl, todo, httpOptions);
}
}
