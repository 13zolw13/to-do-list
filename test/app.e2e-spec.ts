import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('todo list (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/todolist health check api endpoint', () => {
    return request(app.getHttpServer()).get('/todolist').expect(200);
  });

  it('/todolist add task api endpoint', () => {
    return request(app.getHttpServer())
      .post('/todolist/add')
      .send({
        title: 'title',
        description: 'description',
        status: false,
        date: new Date(),
      })
      .expect(201);
  });
});
