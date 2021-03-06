import { Pool, QueryResult, QueryResultRow } from "pg";
import { username, password } from "../config";

const pool = new Pool({
  user: username,
  password: password,
  host: "localhost",
  port: 5432,
  database: "messages",
});

interface CreateMessage {
  title: string;
  post: string;
  username_id: number;
}

interface GetMessages {
  id: number;
  title: string;
  username_id: number;
  username: string;
  date_created: string;
}

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

export const postMessages = (
  params: CreateMessage,
  cb: (err: Error, result: Object) => void
) => {
  const q =
    "insert into blog_posts (title, post, username_id, date_created) values ($1, $2, $3, current_timestamp)";
  const { title, post, username_id } = params;
  pool.query(q, [title, post, username_id], cb);
};

export const postUser = (
  params: PostUser,
  cb: (err: Error, result: Object) => void
) => {
  const q =
    "insert into usernames (username, auth_id) values ($1, $2) on conflict do nothing";
  const { username, auth_id } = params;
  pool.query(q, [username, auth_id], cb);
};

export const getUser = (
  auth_id: string,
  cb: (err: Error, result: QueryResult<GetUser[]>) => void
) => {
  const q = "select id, auth_id from usernames where auth_id = $1";
  pool.query(q, [auth_id], cb);
};

export const verifyUser = (
  id: number,
  cb: (err: Error, result: QueryResult<{ auth_id: string }[]>) => void
) => {
  const q = "select auth_id from usernames where id = $1";
  pool.query(q, [id], cb);
};

export const postFavorites = (
  id: number,
  params: PostFavorites,
  cb: (err: Error, result: Object) => void
) => {
  const q =
    "insert into favorited (username_id, blog_post_id) values ($1, $2) on conflict do nothing";
  const { blog_post_id } = params;
  pool.query(q, [id, blog_post_id], cb);
};

export const getMessages = (
  cb: (err: Error, result: QueryResult<GetMessages[]>) => void
) => {
  const q =
    "select blog_posts.id, blog_posts.title, blog_posts.username_id, usernames.username, blog_posts.date_created from blog_posts inner join usernames on usernames.id = blog_posts.username_id order by blog_posts.date_created DESC";
  pool.query(q, cb);
};

export const getMessage = (
  id: number,
  cb: (err: Error, result: QueryResult<GetMessage[]>) => void
) => {
  const q =
    "select blog_posts.id, blog_posts.title, blog_posts.post, blog_posts.username_id, usernames.username, blog_posts.post, blog_posts.date_created from blog_posts inner join usernames on usernames.id = blog_posts.username_id where blog_posts.id = $1";
  pool.query(q, [id], cb);
};

export const getFavoriteMessages = (
  id: number,
  cb: (err: Error, result: QueryResult<FavoriteMessages[]>) => void
) => {
  const q =
    "select favorited.id, favorited.username_id, favorited.blog_post_id, blog_posts.title, blog_posts.username_id, usernames.username, blog_posts.date_created from favorited inner join blog_posts on blog_posts.id = favorited.blog_post_id inner join usernames on usernames.id = blog_posts.username_id where favorited.username_id = $1";
  pool.query(q, [id], cb);
};

export const deleteMessages = (
  id: number,
  cb: (err: Error, result: Object) => void
) => {
  const q = "delete from blog_posts where id = $1";
  pool.query(q, [id], cb);
};

export const deleteFavorited = (
  id: number,
  cb: (err: Error, result: Object) => void
) => {
  const q = "delete from favorited where id = $1";
  pool.query(q, [id], cb);
};

export const updateMessages = (
  id: number,
  params: UpdateMessage,
  cb: (err: Error, result: Object) => void
) => {
  const { title, post } = params;
  const q =
    "update blog_posts set title = $1, post = $2, date_created = current_timestamp where id = $3";
  pool.query(q, [title, post, id], cb);
};
