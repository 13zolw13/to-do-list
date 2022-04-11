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
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ToDoListService } from './app.service';
import { NewTaskDto } from './dto/newTaskDto';
import { QueryDto } from './dto/queryDto';
import { Task } from './model/taskDto';
import { ToDoList } from './model/ToDoList';
@ApiTags('ToDo List')
@Controller('todolist')
export class AppController {
  constructor(private readonly toDoService: ToDoListService) {}
  @Get()
  @ApiResponse({
    description: 'Successful operation',
    status: 200,
    type: ToDoList,
  })
  getData(@Query() queryDto: QueryDto) {
    if (Object.keys(queryDto).length === 0) {
      return this.toDoService.showAllTasks();
    } else {
      return this.toDoService.showAllTasks(queryDto);
    }
  }
  @Post('add')
  @ApiResponse({
    description: 'Successful operation',
    status: 201,
    type: ToDoList,
  })
  addTask(@Body(new ValidationPipe({ transform: true })) taskDto: NewTaskDto) {
    this.toDoService.addTask(taskDto);
    return this.toDoService.showAllTasks();
  }
  @Put('updateStatus/:index')
  @ApiResponse({
    description: 'Successful operation',
    status: 200,
    type: ToDoList,
  })
  updateStatus(@Param('index') index: string) {
    this.toDoService.changeStatus(Number(index));
    return this.toDoService.showAllTasks();
  }
  @Put('updateTask/:index')
  @ApiResponse({
    description: 'Successful operation',
    status: 200,
    type: ToDoList,
  })
  updateTask(@Param('index') index: string, @Body() taskDto: Task) {
    this.toDoService.changeTask(Number(index), taskDto);
    return this.toDoService.showAllTasks();
  }
  @Delete('remove/:index')
  @ApiResponse({
    description: 'Successful operation',
    status: 200,
    type: ToDoList,
  })
  removeTask(@Param('index') index: string) {
    this.toDoService.removeTask(Number(index));
    return this.toDoService.showAllTasks();
  }
}
