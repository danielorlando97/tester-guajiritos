import { INestApplication } from '@nestjs/common';
import { config } from 'dotenv';
import * as request from 'supertest';
import { createConnection, Connection, getConnection } from 'typeorm';
import knex, { Knex } from 'knex';
import axios from 'axios';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let models: Knex<any, any>;

  beforeEach(async () => {
    models = knex({
      client: 'mysql',
      connection: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'gds',
      },
    });
  });

  afterAll(async () => {
    await models.destroy();
  });

  it('/ (GET)', async () => {
    const users = await models('user').where('id', 1);
    console.log(users);
  });
});
