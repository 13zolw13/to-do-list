import { DocumentBuilder } from '@nestjs/swagger';

export const config = new DocumentBuilder()
  .setTitle('Todo List')
  .setDescription('Todo List')
  .setVersion('1.0')
  .build();
