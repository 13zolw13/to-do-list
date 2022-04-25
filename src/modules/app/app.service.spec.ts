import { Task } from '../../model/task';
import { ToDoListService } from '../../service/app.service';
import { NewTaskDto } from '../../dto/newTaskDto';
import { QueryDto } from '../../dto/queryDto';

describe(ToDoListService.name, () => {
  describe('Adding task to the list', () => {
    it('Add task to the list', () => {
      const task = new NewTaskDto('title', 'description', false);
      const List = new ToDoListService();
      List.addTask(task);
      expect(List.toDoList.length).toBe(1);
    });
  });
  describe('Show specific task', () => {
    it('Should show  specific task from the list', () => {
      const task = new NewTaskDto('title', 'description', false);
      const task2 = new NewTaskDto('title2', 'description', false);
      const List = new ToDoListService();
      List.addTask(task);
      List.addTask(task2);
      expect(List.showTask(0)).toHaveProperty('title', task.title);
    });
  });
  describe('Toggle status', () => {
    it('Should toggle task status', () => {
      const task = new NewTaskDto('title', 'description', false);
      const List = new ToDoListService();
      List.addTask(task);
      List.addTask(task);
      List.changeStatus(0);
      expect(List.toDoList[1].status).toBe(false);
    });

    it('Should toggle task status', () => {
      const task = new NewTaskDto('title', 'description', false);
      const List = new ToDoListService();
      List.addTask(task);
      List.addTask(task);
      List.changeStatus(0);
      List.changeStatus(0);
      expect(List.toDoList[0].status).toBe(false);
      expect(List.toDoList[1].status).toBe(false);
    });
  });
  describe('Updated task', () => {
    it('Should change task', () => {
      const task = new NewTaskDto('title', 'description', false);
      const List = new ToDoListService();
      List.addTask(task);
      const newTask = new Task(2, 'NewTitle', 'description', false, new Date());
      List.changeTask(0, newTask);
      expect(List.toDoList[0].title).toBe('NewTitle');
    });
  });
  describe('Removing task from lists', () => {
    it('Should remove task from list ', () => {
      const task = new NewTaskDto('title', 'description', false);
      const List = new ToDoListService();
      List.addTask(task);
      List.removeTask(0);
      expect(List.toDoList.length).toBe(0);
    });

    it('Should remove task from list ', () => {
      const task = new NewTaskDto('title', 'description', false);
      const List = new ToDoListService();
      List.addTask(task);
      List.addTask(task);
      List.addTask(task);
      List.removeTask(1);
      expect(List.toDoList.length).toBe(2);
    });
  });
  describe('Filter task', () => {
    it('Should show only done tasks ', () => {
      const task = new NewTaskDto('title', 'description', false);
      const List = new ToDoListService();
      List.addTask(task);
      List.addTask(task);
      List.addTask(task);
      List.changeStatus(1);
      expect(List.showTasksWithStatus(true).length).toBe(1);
    });

    it('Should show only undone tasks ', () => {
      const task = new NewTaskDto('title', 'description', false);
      const List = new ToDoListService();
      List.addTask(task);
      List.addTask(task);
      List.addTask(task);
      List.changeStatus(2);

      expect(List.showTasksWithStatus(true).length).toBe(1);
    });
  });
  describe('Show all tasks', () => {
    it('should return list of all tasks ', () => {
      const task = new NewTaskDto('title', 'description', false);
      const List = new ToDoListService();
      List.addTask(task);
      List.addTask(task);
      List.addTask(task);
      expect(List.showAllTasks().length).toBe(3);
    });

    it('should return task with index', () => {
      const task = new NewTaskDto('title', 'description', false);
      const List = new ToDoListService();
      List.addTask(task);
      List.addTask(task);
      List.addTask(task);
      const query: QueryDto = { IndexQuery: '1' };
      const searchTask = List.showAllTasks(query);

      expect(searchTask.length).toBe(1);
    });
    it('should return task status change', () => {
      const task = new NewTaskDto('title', 'description', false);
      const task2 = new NewTaskDto('title', 'description', true);
      const List = new ToDoListService();
      List.addTask(task);
      List.addTask(task2);
      List.addTask(task);
      const query: QueryDto = { statusChange: 'true' };
      const searchTask = List.showAllTasks(query);

      expect(searchTask.length).toBe(1);
    });
    it('should return task status change', () => {
      const task = new NewTaskDto('title', 'description', false);
      const task2 = new NewTaskDto('title', 'description', true);
      const List = new ToDoListService();
      List.addTask(task);
      List.addTask(task2);
      List.addTask(task);

      const query: QueryDto = { statusChange: 'false' };
      const searchTask = List.showAllTasks(query);

      expect(searchTask.length).toBe(2);
    });
  });
});
