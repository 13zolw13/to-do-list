import { Task } from './taskDto';

export class ToDoListDto {
  toDoList: Task[];
  constructor() {
    this.toDoList = [];
  }

  addTask(task: Task) {
    this.toDoList.push(task);
    return this.toDoList;
  }
  showTask(index: number) {
    return this.toDoList[index];
  }
   
}
