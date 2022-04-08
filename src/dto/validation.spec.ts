import { Task } from './taskDto';
import { ToDoListDto } from './toDoListDto';

describe(ToDoListDto.name, () => {
  it('Add task to the list', () => {
    const task = new Task(1, 'title', 'description', false, new Date());
    const List = new ToDoListDto();
    List.addTask(task);
    expect(List.toDoList[0].id).toBe(1);
  });

  it('Should show  specific task from the list', () => {
    const task = new Task(1, 'title', 'description', false, new Date());
    const List = new ToDoListDto();
    List.addTask(task);
    expect(List.showTask(0).id).toBe(1);
  });

  it('Should toogle task status', () => {
    const task = new Task(1, 'title', 'description', false, new Date());
    const List = new ToDoListDto();
    List.addTask(task);
    List.changeStatus(0);
    expect(List.toDoList[0].status).toBe(true);
  });
  it('Should toogle task status', () => {
    const task = new Task(1, 'title', 'description', false, new Date());
    const List = new ToDoListDto();
    List.addTask(task);
    List.changeStatus(0);
    List.changeStatus(0);
    expect(List.toDoList[0].status).toBe(false);
  });
});
