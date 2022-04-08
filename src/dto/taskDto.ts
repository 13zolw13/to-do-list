export class Task {
  id: number;
  title: string;
  description: string;
  status: false;
  constructor(id: number, title: string, description: string, status: false) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
  }

  showTask() {
    console.log(`${this.id} ${this.title} ${this.description} ${this.status}`);
  }
}
