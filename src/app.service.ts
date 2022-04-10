import { Injectable } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { QueryDto } from './dto/queryDto';
import { Task } from './dto/taskDto';
import { HandleToDoList } from './HandleToDoList';

@Injectable()
export class ToDoListService extends HandleToDoList {
  @ApiQuery({ name: 'statusChange', enum: ['true', 'false'] })
  @ApiQuery({ name: 'IndexQuery', type: String })
  showAllTasks(queryOption?: QueryDto): Task[] {
    let TaskList: Task[] = [];
    if (queryOption?.IndexQuery) {
      const task = this.showTask(Number(queryOption.IndexQuery));
      TaskList.push(task);
    }
    if (queryOption?.statusChange) {
      TaskList = this.showTasksWithStatus(queryOption.statusChange === 'true');
    }
    if (!queryOption) {
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
