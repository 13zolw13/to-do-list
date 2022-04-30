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
import { NewTaskDto } from '../../dto/newTaskDto';
import { QueryDto } from '../../dto/queryDto';
import { Task } from '../../model/task';
import { ToDoList } from '../../model/ToDoList';
import { UpdateTaskDto } from '../../model/UpdateTaskDto';
import { ToDoListService } from '../../modules/app/service/app.service';
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
    return this.toDoService.showAllTasks(queryDto);
  }
  @Post('add')
  @ApiResponse({
    description: 'Successful operation',
    status: 201,
    type: ToDoList,
  })
  addTask(@Body(new ValidationPipe({ transform: true })) taskDto: NewTaskDto) {
    return this.toDoService.addTask(taskDto);
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
    const updateTaskDto = new UpdateTaskDto(index, taskDto);

    this.toDoService.changeTask(updateTaskDto);
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
