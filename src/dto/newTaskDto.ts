import { IsBoolean, IsDate, IsString } from 'class-validator';

export class NewTaskDto {
  @IsString()
  title: string;
  @IsString()
  description: string;
  @IsBoolean()
  status: boolean;

  constructor(title: string, description: string, status: boolean) {
    this.title = title;
    this.description = description;
    this.status = status;
  }
}
