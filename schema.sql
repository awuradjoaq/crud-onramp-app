-- DROP DATABASE IF EXISTS messages;

-- CREATE DATABASE messages;

CREATE TABLE username (
  id SERIAL,
  username text,
  PRIMARY KEY (id)
);

CREATE TABLE blog_posts (
  id SERIAL,
  title text,
  post text,
  username_id int,
  date_created date,
  PRIMARY KEY (id)
);

CREATE TABLE favorited (
  id SERIAL,
  username_id int,
  blog_post_id int,
  PRIMARY KEY (id)
);

ALTER TABLE "blog_posts" ADD FOREIGN KEY ("username_id") REFERENCES "username" ("id") ON DELETE CASCADE;

ALTER TABLE "favorited" ADD FOREIGN KEY ("username_id") REFERENCES "username" ("id") ON DELETE CASCADE;

ALTER TABLE "favorited" ADD FOREIGN KEY ("blog_post_id") REFERENCES "blog_posts" ("id") ON DELETE CASCADE;