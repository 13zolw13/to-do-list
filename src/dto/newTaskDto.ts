import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

export class NewTaskDto {
  @ApiProperty()
  @IsString()
  title: string;
  @ApiProperty()
  @IsString()
  description: string;
  @ApiProperty()
  @IsBoolean()
  status: boolean;

  constructor(title: string, description: string, status: boolean) {
    this.title = title;
    this.description = description;
    this.status = status;
  }
}
