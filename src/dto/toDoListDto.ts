import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { Task } from './taskDto';

export class ToDoListDto {
  @ValidateNested()
  @Type(() => Task)
  @IsArray()
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

  showTasksWithStatus(status: boolean): Task[] {
    const filterTask = this.toDoList.filter((task) => {
      return task.status === status;
    });
    return filterTask;
  }
}
