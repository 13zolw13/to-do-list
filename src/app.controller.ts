import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ToDoListService } from './app.service';
import { NewTaskDto } from './dto/newTaskDto';
import { QueryDto } from './dto/queryDto';
import { Task } from './dto/taskDto';

@Controller('todolist')
export class AppController {
  constructor(private readonly toDoService: ToDoListService) {}

  @Get()
  getData(@Query() queryDto: QueryDto) {
    // const task1 = new NewTaskDto('True Title', 'description', true);
    // this.toDoService.addTask(task1);
    // this.toDoService.addTask(task1);
    // const task2 = new NewTaskDto('True Title', 'description', false);
    // this.toDoService.addTask(task2);
    // this.toDoService.addTask(task2);
    return this.toDoService.showAllTasks(queryDto);
  }
  @Post('add')
  addTask(@Body(new ValidationPipe({ transform: true })) taskDto: NewTaskDto) {
    this.toDoService.addTask(taskDto);
    return this.toDoService.showAllTasks();
  }
  @Delete('remove/:index')
  removeTask(@Param('index') index: string) {
    this.toDoService.removeTask(Number(index));
    return this.toDoService.showAllTasks();
  }
}
