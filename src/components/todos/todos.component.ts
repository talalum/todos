import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/services/todos.service';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  public todos: Todo[] = [];
  public flag: boolean = false;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todosService
      .getTodos('https://jsonplaceholder.typicode.com/todos')
      .subscribe((data) => {
        console.log(Object.values(data));
        this.todos = Object.values(data);
      });
    // console.log(this.todos);
  }

  openTodos = () => {
    this.flag = true;
  };
}
