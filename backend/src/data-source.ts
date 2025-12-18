import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entities/User';
import { Comment } from './entities/Comment';
import dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: process.env.DB_PATH || './secure.db',
  synchronize: true, // à désactiver en production
  logging: false,
  entities: [User, Comment],
});
