import { Pool, QueryResult, QueryResultRow } from 'pg';
import {username, password} from '../config';

const pool =  new Pool({
  user: username,
  password: password,
  host: 'localhost',
  port: 5432,
  database: 'messages',
});

interface CreateMessage {title: string, post: string, username_id: number, date_created: string};

interface GetMessages {
  id: number;
  title: string;
  username_id: number;
  username: string;
  date_created: string;
};

interface GetMessage extends GetMessages {
  post: string;
}

interface FavoriteMessages extends GetMessages {
  blog_post_id: number;
  username_id: number;
  date_created: string;
}

interface UpdateMessage {
  title: string;
  post: string;
  date_created: string;
}

interface PostUser {
  username: string;
  auth_id: string;
}

interface GetUser extends PostUser {
  id: number;
}

interface PostFavorites {
  blog_post_id: number;
}

export const postMessages = (params: CreateMessage, cb: (err: Error, result: Object) => void) => {
  const q = 'insert into blog_posts (title, post, username_id, date_created) values ($1, $2, $3, $4)';
  const {title, post, username_id, date_created} = params;
  pool.query(q,[title, post, username_id, date_created], cb);
};

export const postUser = (params: PostUser, cb:(err: Error, result: Object) => void) => {
  const q = 'insert into usernames (username, auth_id) values ($1, $2) on conflict do nothing';
  const {username, auth_id} = params;
  pool.query(q,[username, auth_id], cb);
};

export const getUser = (auth_id: string, cb: (err: Error, result: QueryResult<GetUser[]>) => void) => {
  const q = 'select id from usernames where auth_id = $1';
  pool.query(q, [auth_id], cb);
}

export const postFavorites = (id: number, params: PostFavorites, cb:(err: Error, result: Object) => void) => {
  const q = 'insert into favorited (username_id, blog_post_id) values ($1, $2)';
  const {blog_post_id} = params;
  pool.query(q,[id, blog_post_id], cb);
}

export const getMessages = (cb: (err: Error, result: QueryResult<GetMessages[]>) => void) => {
  const q = 'select blog_posts.id, blog_posts.title, blog_posts.username_id, usernames.username, blog_posts.date_created from blog_posts inner join usernames on usernames.id = blog_posts.username_id';
  pool.query(q, cb);
}

export const getMessage = (id: number, cb: (err: Error, result: QueryResult<GetMessage[]>) => void) => {
  const q = 'select blog_posts.id, blog_posts.title, blog_posts.post, blog_posts.username_id, usernames.username, blog_posts.post, blog_posts.date_created from blog_posts inner join usernames on usernames.id = blog_posts.username_id where blog_posts.id = $1';
  pool.query(q, [id], cb);
}

export const getFavoriteMessages = (id: number, cb: (err: Error, result: QueryResult<FavoriteMessages[]>) => void) => {
  const q = 'select favorited.id, favorited.username_id, favorited.blog_post_id, blog_posts.title, blog_posts.username_id, usernames.username, blog_posts.date_created from favorited inner join blog_posts on blog_posts.id = favorited.blog_post_id inner join usernames on usernames.id = blog_posts.username_id where favorited.username_id = $1';
  pool.query(q, [id], cb);
}

export const deleteMessages = (id: number, cb: (err: Error, result: Object) => void) => {
  const q = 'delete from blog_posts where id = $1';
  pool.query(q, [id], cb);
}

export const updateMessages = (id: number, params: UpdateMessage, cb: (err: Error, result: Object) => void) => {
  const {title, post, date_created} = params;
  const q = 'update blog_posts set title = $1, post = $2, date_created = $3 where id = $4';
  pool.query(q,[title, post, date_created, id], cb);
};

