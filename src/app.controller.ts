import { Controller, Get } from '@nestjs/common';
import { ToDoListService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly toDoService: ToDoListService) {}

  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
