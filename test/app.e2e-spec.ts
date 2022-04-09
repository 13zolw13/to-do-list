import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { NewTaskDto } from './../src/dto/newTaskDto';

const mockTask = new NewTaskDto('title', 'description', false);
const mockTask2 = new NewTaskDto('title2', 'description2', true);

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
    it('/todolist health check api endpoint', async () => {
      return await request(app.getHttpServer()).get('/todolist').expect(200);
    });
    it('/todolist query search', async () => {
      await request(app.getHttpServer()).post('/todolist/add').send(mockTask);
      await request(app.getHttpServer()).post('/todolist/add').send(mockTask2);
      const response = await request(app.getHttpServer()).get(
        '/todolist?statusChange=true',
      );
      expect(response.statusCode).toBe(200);
      console.log(response.body);
      expect(response.body.length).toBe(1);
    });
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

    it('/todolist query search', async () => {
      await request(app.getHttpServer()).post('/todolist/add').send(mockTask);
      await request(app.getHttpServer()).post('/todolist/add').send(mockTask2);
      const response = await request(app.getHttpServer()).delete(
        '/todolist/remove/1',
      );
      expect(response.status).toBe(200);
      expect(response.body.length).toBe(1);
    });
  });
});
