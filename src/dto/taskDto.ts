import { IsBoolean, IsDate, IsNumber, IsString } from 'class-validator';

export class Task {
  @IsNumber()
  id: number;
  @IsString()
  title: string;
  @IsString()
  description: string;
  @IsBoolean()
  status: boolean;
  @IsDate()
  createdAt: Date;
  constructor(
    id: number,
    title: string,
    description: string,
    status: boolean,
    createdAt: Date,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.createdAt = createdAt;
  }

  showTask() {
    console.log(`${this.id} ${this.title} ${this.description} ${this.status}`);
  }
}
