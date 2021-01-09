import { RequestHandler } from 'express';

// import { Message } from '../models/messages';

import { postMessages, getMessages, getMessage, deleteMessages, updateMessages } from '../models/database';

interface CreateMessage {title: string, post: string, username_id: number, date_created: string}

interface UpdateMessage {
  title: string;
  post: string;
  date_created: string;
}

export const createMessage: RequestHandler = (req, res, next) => {
  const params: CreateMessage = req.body;
  postMessages(params, (err, result) => {
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

export const removeMessages: RequestHandler = (req, res, next) => {
  const {id} = req.params;
  const numId = +id;
  deleteMessages(numId, (err, result) => {
    console.log(err);
    res.status(201).send('successfully deleted');
  });
};

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