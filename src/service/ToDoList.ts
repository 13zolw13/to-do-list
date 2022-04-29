import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { Task } from '../model/task';

export class ToDoList {
  @ValidateNested()
  @Type(() => Task)
  @IsArray()
  @ApiProperty({ type: () => Array(Task) })
  toDoList: Task[];
  constructor() {
    this.toDoList = [];
  }
}
