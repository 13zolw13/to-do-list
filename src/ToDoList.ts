import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
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
