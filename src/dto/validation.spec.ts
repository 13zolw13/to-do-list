import { Task } from './taskDto';
import { ToDoListDto } from './toDoListDto';

describe('Name of the group', () => {
  it('should ', () => {
    const task = new Task(1, 'title', 'description', false);
    const List = new ToDoListDto();
    List.addTask(task);
    expect(List.toDoList[0].id).toBe(1);
  });
});
