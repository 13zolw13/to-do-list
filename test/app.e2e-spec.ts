import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/modules/app/app.module';
import { NewTaskDto } from './../src/dto/newTaskDto';

const mockTask = new NewTaskDto('title', 'description', false);
const mockTask2 = new NewTaskDto('title2', 'description2', true);
const stabMock = new NewTaskDto('stab', ' stab description', true);

describe('todo list (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });
  describe('endpoints', () => {
    describe('List of task to do', () => {
      it('/todolist health check api endpoint', async () => {
        return await request(app.getHttpServer()).get('/todolist').expect(200);
      });
      describe('filter task ', () => {
        it('/todolist query search', async () => {
          await request(app.getHttpServer())
            .post('/todolist/add')
            .send(mockTask);
          await request(app.getHttpServer())
            .post('/todolist/add')
            .send(mockTask2);
          const response = await request(app.getHttpServer()).get(
            '/todolist?statusChange=true',
          );
          expect(response.statusCode).toBe(200);
          expect(response.body.length).toBe(1);
        });
      });
    });
    describe('Add task', () => {
      it('/todolist add task api endpoint', async () => {
        return await request(app.getHttpServer())
          .post('/todolist/add')
          .send({
            title: 'title',
            description: 'description',
            status: false,
          })
          .expect(201);
      });
    });
    describe('Remove task', () => {
      it('/todolist  remove task from list', async () => {
        await request(app.getHttpServer()).post('/todolist/add').send(mockTask);
        await request(app.getHttpServer())
          .post('/todolist/add')
          .send(mockTask2);
        const response = await request(app.getHttpServer()).delete(
          '/todolist/remove/1',
        );
        expect(response.status).toBe(200);
        expect(response.body.length).toBe(1);
      });
    });
    describe('Update task status', () => {
      it('/todolist  update task status', async () => {
        await request(app.getHttpServer()).post('/todolist/add').send(mockTask);
        await request(app.getHttpServer())
          .post('/todolist/add')
          .send(mockTask2);
        const response = await request(app.getHttpServer()).put(
          '/todolist/updateStatus/1',
        );
        expect(response.status).toBe(200);
        expect(response.body.length).toBe(2);
        expect(response.body[1].status).toBe(false);
      });
    });
    describe('Update task', () => {
      it('/todolist  update task', async () => {
        await request(app.getHttpServer()).post('/todolist/add').send(mockTask);
        await request(app.getHttpServer())
          .post('/todolist/add')
          .send(mockTask2);
        const response = await request(app.getHttpServer())
          .put('/todolist/updateTask/1')
          .send(stabMock);
        expect(response.status).toBe(200);
        expect(response.body.length).toBe(2);
        expect(response.body[1].title).toBe('stab');
      });
    });
  });
});
