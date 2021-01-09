import { RequestHandler } from 'express';

// import { Message } from '../models/messages';

import { postMessages, getMessages, deleteMessages } from '../models/database';

interface NewMessage {title: string, id: number, post: string, username_id: number, date_created: string}

export const createMessage: RequestHandler = (req, res, next) => {
  const {title, post, username_id, date_created}: NewMessage = req.body;
  postMessages(title, post, username_id, date_created, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).json({message: 'its been saved!'});
    }
  });

};

export const retrieveMessages: RequestHandler = (req, res, next) => {
  getMessages((err, result) => {
    res.status(200).send(result.rows);
  });
};

export const removeMessages: RequestHandler = (req, res, next) => {
  const {id} = req.params;
  const numId = +id;
  deleteMessages(numId, (err, result) => {
    console.log(err);
    res.status(201).send('successfully deleted');
  });
};