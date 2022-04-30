import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, ValidateNested } from 'class-validator';
import { Task } from './task';


export class UpdateTaskDto {
  @ApiProperty()
  @IsNumber()
  index: number;
  @ApiProperty()
  @ValidateNested()
  task: Task;
  constructor(index: string | number, task: Task) {
    this.index = Number(index);
    this.task = task;
  }
}
