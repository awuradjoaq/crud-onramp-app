import { Pool } from 'pg';
import {username, password} from '../config';

const pool =  new Pool({
  user: username,
  password: password,
  host: 'localhost',
  port: 5432,
  database: 'messages',
});

export const postMessages = (id: number, title: string, post: string, username_id: number, date_created: string, cb: (err: Object, result: Object) => void) => {
  const q = 'insert into blog_posts (id, title, post, username_id, date_created) values ($1, $2, $3, $4, $5)';
  pool.query(q,[id, title, post, username_id, date_created], cb);
}

export const getMessages = (cb: (err: Object, result: Object) => void) => {
  const q = 'select * from blog_posts';
  pool.query(q, cb);
}

export const deleteMessages = (id: string, cb: (err: Object, result: Object) => void) => {
  const q = 'delete from blog_posts where id = $1';
  pool.query(q, [id], cb);
}

