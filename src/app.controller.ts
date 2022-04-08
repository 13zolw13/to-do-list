import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ToDoListService } from './app.service';
import { Task } from './dto/taskDto';

@Controller('todolist')
export class AppController {
  constructor(private readonly toDoService: ToDoListService) {}

  @Get()
  getData() {
    const task = new Task(1, 'title', 'description', false, new Date());
    this.toDoService.addTask(task);
    this.toDoService.addTask(task);

    return this.toDoService.showAllTasks();
  }
  @Post('add')
  addTask(@Body(new ValidationPipe({ transform: true })) taskDto: Task) {
    this.toDoService.addTask(taskDto);
    return this.toDoService.showAllTasks();
  }
}
