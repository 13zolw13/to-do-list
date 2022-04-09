import { QueryDto } from './dto/queryDto';
import { Task } from './dto/taskDto';
import { ToDoList } from './ToDoList';

export abstract class HandleToDoList extends ToDoList {
  abstract showAllTasks(queryOption?: QueryDto): Task[];
  abstract showTask(index: number): Task;
  abstract showTasksWithStatus(status: boolean): Task[];

  addTask(task: Task) {
    this.toDoList.push(task);
    return this.toDoList;
  }
  changeStatus(index: number) {
    let task: Task;
    this.toDoList[index].status === true
      ? (task = new Task(
          this.toDoList[index].id,
          this.toDoList[index].title,
          this.toDoList[index].description,
          false,
          new Date(),
        ))
      : (task = new Task(
          this.toDoList[index].id,
          this.toDoList[index].title,
          this.toDoList[index].description,
          true,
          new Date(),
        ));

    return this.changeTask(index, task);
  }
  changeTask(index: number, task: Task) {
    this.toDoList[index] = task;
    return this.toDoList[index];
  }
  removeTask(index: number) {
    this.toDoList.splice(index, 1);
    return this.toDoList;
  }
}
