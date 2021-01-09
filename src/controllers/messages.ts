import { RequestHandler } from 'express';

// import { Message } from '../models/messages';

import { postMessages, getMessages, deleteMessages } from '../models/database';

interface NewMessage {title: string, id: number, post: string, username_id: number, date_created: string}

export const createMessage: RequestHandler = (req, res, next) => {
  const {id, title, post, username_id, date_created}: NewMessage = req.body;
  postMessages(id, title, post, username_id, date_created, (err, result) => {
    res.status(201).json({message: 'its been saved!'});
  });

};

export const retrieveMessages: RequestHandler = (req, res, next) => {
  getMessages((err, result) => {
    res.status(200).send(result);
  });
};

export const removeMessages: RequestHandler = (req, res, next) => {
  const {id} = req.body;
  console.log(id);
  deleteMessages(id, (err, result) => {
    console.log(err);
    res.status(201).send('successfully deleted');
  });
};