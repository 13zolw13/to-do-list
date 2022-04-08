import { Task } from './taskDto';

export class ToDoListDto {
  toDoList: Task[];
  constructor() {
    this.toDoList = [];
  }

  addTask(task: Task) {
    return this.toDoList.push(task);
  }
}
