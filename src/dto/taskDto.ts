export class Task {
  id: number;
  title: string;
  description: string;
  status = false;
  createdAt: Date;
  constructor(
    id: number,
    title: string,
    description: string,
    status: false,
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
