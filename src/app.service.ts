import { Injectable } from '@nestjs/common';
import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { QueryDto } from './dto/queryDto';
import { Task } from './dto/taskDto';

export class ToDoList {
  @ValidateNested()
  @Type(() => Task)
  @IsArray()
  toDoList: Task[];
  constructor() {
    this.toDoList = [];
  }
}
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

@Injectable()
export class ToDoListService extends HandleToDoList {
  showAllTasks(queryOption?: QueryDto): Task[] {
    let TaskList: Task[];
    if (queryOption?.IndexQuery) {
      const task = this.showTask(Number(queryOption.IndexQuery));
      TaskList = [task];
    }
    if (queryOption?.statusChange) {
      TaskList = this.showTasksWithStatus(queryOption.statusChange === 'true');
    } else {
      TaskList = this.toDoList;
    }
    return TaskList;
  }

  showTask(index: number): Task {
    return this.toDoList[index];
  }

  showTasksWithStatus(status: boolean): Task[] {
    const filterTask = this.toDoList.filter((task) => {
      return task.status === status;
    });
    return filterTask;
  }
}
