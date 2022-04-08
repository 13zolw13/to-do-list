import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ToDoListService } from './app.service';
import { QueryDto } from './dto/queryDto';
import { Task } from './dto/taskDto';

@Controller('todolist')
export class AppController {
  constructor(private readonly toDoService: ToDoListService) {}

  @Get()
  getData(@Query() queryDto: QueryDto) {
    console.log(queryDto);

    const task1 = new Task(1, 'True Title', 'description', true, new Date());
    this.toDoService.addTask(task1);
    this.toDoService.addTask(task1);
    const task2 = new Task(1, 'True Title', 'description', false, new Date());
    this.toDoService.addTask(task2);
    this.toDoService.addTask(task2);
    return this.toDoService.showAllTasks(queryDto);
  }
  @Post('add')
  addTask(@Body(new ValidationPipe({ transform: true })) taskDto: Task) {
    this.toDoService.addTask(taskDto);
    return this.toDoService.showAllTasks();
  }
}
