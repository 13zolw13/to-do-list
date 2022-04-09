import { Task } from './dto/taskDto';
import { ToDoListService } from './app.service';

describe(ToDoListService.name, () => {
  it('Add task to the list', () => {
    const task = new Task(1, 'title', 'description', false, new Date());
    const List = new ToDoListService();
    List.addTask(task);
    expect(List.toDoList[0].id).toBe(1);
  });

  it('Should show  specific task from the list', () => {
    const task = new Task(1, 'title', 'description', false, new Date());
    const List = new ToDoListService();
    List.addTask(task);
    expect(List.showTask(0).id).toBe(1);
  });

  it('Should toggle task status', () => {
    const task = new Task(1, 'title', 'description', false, new Date());
    const List = new ToDoListService();
    List.addTask(task);
    List.addTask(task);
    List.changeStatus(0);
    expect(List.toDoList[1].status).toBe(false);
  });
  it('Should toggle task status', () => {
    const task = new Task(1, 'title', 'description', false, new Date());
    const List = new ToDoListService();
    List.addTask(task);
    List.addTask(task);
    List.changeStatus(0);
    List.changeStatus(0);
    expect(List.toDoList[0].status).toBe(false);
    expect(List.toDoList[1].status).toBe(false);
  });

  it('Should change task', () => {
    const task = new Task(1, 'title', 'description', false, new Date());
    const List = new ToDoListService();
    List.addTask(task);
    const newTask = new Task(2, 'NewTitle', 'description', false, new Date());
    List.changeTask(0, newTask);
    expect(List.toDoList[0].title).toBe('NewTitle');
  });

  it('Should remove task from list ', () => {
    const task = new Task(1, 'title', 'description', false, new Date());
    const List = new ToDoListService();
    List.addTask(task);
    List.removeTask(0);
    expect(List.toDoList.length).toBe(0);
  });

  it('Should remove task from list ', () => {
    const task = new Task(1, 'title', 'description', false, new Date());
    const List = new ToDoListService();
    List.addTask(task);
    List.addTask(task);
    List.addTask(task);
    List.removeTask(1);
    expect(List.toDoList.length).toBe(2);
  });

  it('Should show only done tasks ', () => {
    const task = new Task(1, 'title', 'description', false, new Date());
    const List = new ToDoListService();
    List.addTask(task);
    List.addTask(task);
    List.addTask(task);
    List.changeStatus(1);
    expect(List.showTasksWithStatus(true).length).toBe(1);
  });

  it('Should show only undone tasks ', () => {
    const task = new Task(1, 'title', 'description', false, new Date());
    const List = new ToDoListService();
    List.addTask(task);
    List.addTask(task);
    List.addTask(task);
    List.changeStatus(2);

    expect(List.showTasksWithStatus(false).length).toBe(2);
  });
});
