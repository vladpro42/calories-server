import { DataSource } from 'typeorm';
import { Users } from './user/entities/User';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'qwerty123',
  database: 'calories',
  synchronize: true,
  logging: false,
  entities: [Users],
  subscribers: [],
  migrations: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log('HELLO WORLD!');
  })
  .catch((err) => {
    console.error('Error initializing data source', err);
  });
