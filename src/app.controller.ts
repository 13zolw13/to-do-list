import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ToDoListService } from './app.service';
import { NewTaskDto } from './dto/newTaskDto';
import { QueryDto } from './dto/queryDto';
import { Task } from './dto/taskDto';
@ApiTags('ToDo List')
@Controller('todolist')
export class AppController {
  constructor(private readonly toDoService: ToDoListService) {}

  @Get()
  getData(@Query() queryDto: QueryDto) {
    return this.toDoService.showAllTasks(queryDto);
  }
  @Post('add')
  addTask(@Body(new ValidationPipe({ transform: true })) taskDto: NewTaskDto) {
    this.toDoService.addTask(taskDto);
    return this.toDoService.showAllTasks();
  }
  @Put('updateStatus/:index')
  updateStatus(@Param('index') index: string) {
    this.toDoService.changeStatus(Number(index));
    return this.toDoService.showAllTasks();
  }
  @Put('updateTask/:index')
  updateTask(@Param('index') index: string, @Body() taskDto: Task) {
    this.toDoService.changeTask(Number(index), taskDto);
    return this.toDoService.showAllTasks();
  }
  @Delete('remove/:index')
  removeTask(@Param('index') index: string) {
    this.toDoService.removeTask(Number(index));
    return this.toDoService.showAllTasks();
  }
}
