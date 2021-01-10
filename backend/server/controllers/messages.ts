import { RequestHandler } from 'express';

import { postMessages, getMessages, getMessage, deleteMessages, updateMessages, getFavoriteMessages, postUser, getUser, postFavorites, deleteFavorited } from '../models/database';

interface CreateMessage {title: string, post: string, username_id: number, date_created: string}

interface UpdateMessage {
  title: string;
  post: string;
  date_created: string;
}

interface PostUser {
  username: string;
  auth_id: string;
}

interface PostFavorites {
  blog_post_id: number;
}

interface RemoveFavorites {
  id: number;
}

export const createMessage: RequestHandler = (req, res, next) => {
  const params: CreateMessage = req.body;
  postMessages(params, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).send();
    }
  });
};

export const createUser: RequestHandler = (req, res, next) => {
  const params: PostUser = req.body;
  postUser(params, (err, result) => {
    if (err) {
      res.status(400).send(err)
    } else {
      res.status(201).send()
    }
  })
}

export const createFavorite: RequestHandler = (req, res, next) => {

  const params: PostFavorites = req.body;
  const {userId} = req.params;
  const numId = +userId;
  postFavorites(numId, params, (err, result) => {
    if (err) {
      res.status(400).send(err)
    } else {
      res.status(201).send()
    }
  })
}

export const retrieveUser: RequestHandler = (req, res, next) => {
  const {authId} = req.params;
  getUser(authId, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(result.rows);
    }
  })
}

export const retrieveMessages: RequestHandler = (req, res, next) => {
  getMessages((err, result) => {
    res.status(200).send(result.rows);
  });
};

export const retrieveMessage: RequestHandler = (req, res, next) => {
  const {id} = req.params;
  const numId = +id;
  getMessage(numId, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(result.rows)
    }
  })
}

export const retrieveFavoriteMessages: RequestHandler = (req, res, next) => {
  const {userId} = req.params;
  const numId = +userId;
  getFavoriteMessages(numId, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(result.rows)
    }
  })
}

export const removeMessages: RequestHandler = (req, res, next) => {
  const {id} = req.params;
  const numId = +id;
  deleteMessages(numId, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).send('successfully deleted');
    }
  });
};

export const removeFavorited: RequestHandler = (req, res, next) => {
  // FIX TYPE
  const {id} = req.body;
  deleteFavorited(id,(err, result) => {
    if (err) {
      res.status(400).send(err)
    } else {
      res.status(204).send()
    }
  })
}

export const updatedMessages: RequestHandler = (req, res, next) => {
  const fields: UpdateMessage = req.body;
  const {id} = req.params;
  const numId = +id;
  updateMessages(numId, fields, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(204).send('successfully updated');
    }
  })
}