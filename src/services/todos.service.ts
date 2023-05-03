import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private todoService: HttpClient) {}
  
  getTodos(url: string) {
    return this.todoService.get(url);
  }
}
