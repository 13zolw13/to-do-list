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
  changeStatus(index: number) {
    this.toDoList[index].status === true
      ? (this.toDoList[index].status = false)
      : (this.toDoList[index].status = true);
    return this.toDoList[index];
  }
}
