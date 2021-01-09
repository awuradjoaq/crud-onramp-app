import { Pool, QueryResult, QueryResultRow } from 'pg';
import {username, password} from '../config';

const pool =  new Pool({
  user: username,
  password: password,
  host: 'localhost',
  port: 5432,
  database: 'messages',
});

interface GetMessages {
  id: number;
  title: string;
  post: string;
  username_id: number;
  username: string;
  date_created: string;
};

interface GetMessage extends GetMessages {
  post: string;
}

export const postMessages = (title: string, post: string, username_id: number, date_created: string, cb: (err: Error, result: Object) => void) => {
  const q = 'insert into blog_posts (title, post, username_id, date_created) values ($1, $2, $3, $4)';
  pool.query(q,[title, post, username_id, date_created], cb);
}

export const getMessages = (cb: (err: Error, result: QueryResult<GetMessages[]>) => void) => {
  const q = 'select blog_posts.id, blog_posts.title, blog_posts.post, blog_posts.username_id, usernames.username, blog_posts.date_created from blog_posts inner join usernames on usernames.id = blog_posts.username_id';
  pool.query(q, cb);
}

export const getMessage = (id: number, cb: (err: Error, result: QueryResult<GetMessage[]>) => void) => {
  const q = 'select blog_posts.id, blog_posts.title, blog_posts.post, blog_posts.username_id, usernames.username, blog_posts.post, blog_posts.date_created from blog_posts inner join usernames on usernames.id = blog_posts.username_id where blog_posts.id = $1';
  pool.query(q, [id], cb);
}


export const deleteMessages = (id: number, cb: (err: Error, result: Object) => void) => {
  const q = 'delete from blog_posts where id = $1';
  pool.query(q, [id], cb);
}

