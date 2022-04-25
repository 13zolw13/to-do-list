import { NewTaskDto } from '../dto/newTaskDto';
import { QueryDto } from '../dto/queryDto';
import { Task } from '../model/taskDto';
import { ToDoList } from '../model/ToDoList';

export abstract class HandleToDoList extends ToDoList {
  abstract showAllTasks(queryOption?: QueryDto): Task[];
  abstract showTask(index: number): Task;
  abstract showTasksWithStatus(status: boolean): Task[];

  addTask(task: NewTaskDto) {
    const taskId = Math.floor(Math.random() * 1000);
    const newTask = new Task(
      taskId,
      task.title,
      task.description,
      task.status,
      new Date(),
    );
    this.toDoList.push(newTask);
    return this.toDoList;
  }
  changeStatus(index: number) {
    let task: Task;
    this.toDoList[index].status === true
      ? (task = new Task(
          this.toDoList[index].id,
          this.toDoList[index].title,
          this.toDoList[index].description,
          false,
          new Date(),
        ))
      : (task = new Task(
          this.toDoList[index].id,
          this.toDoList[index].title,
          this.toDoList[index].description,
          true,
          new Date(),
        ));

    return this.changeTask(index, task);
  }
  changeTask(index: number, task: Task) {
    this.toDoList[index] = task;
    return this.toDoList[index];
  }
  removeTask(index: number) {
    this.toDoList.splice(index, 1);
    return this.toDoList;
  }
}
