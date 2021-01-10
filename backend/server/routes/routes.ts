import { Router } from 'express';
import { createMessage, retrieveMessages, retrieveMessage, removeMessages, updatedMessages,retrieveFavoriteMessages, createUser, retrieveUser } from '../controllers/messages';

const router = Router();

// POST new blog post
router.post('/', createMessage);

// POST new user
router.post('/user', createUser);

// GET current user
router.get('/user/:authId', retrieveUser);

// GET all blog posts
router.get('/', retrieveMessages);

// GET one blog post
router.get('/:id', retrieveMessage);

// GET favorite blog posts
router.get('/favorites/:userId', retrieveFavoriteMessages);

// DELETE one blog post
router.delete('/:id', removeMessages);

// UPDATE one blog post
router.patch('/:id', updatedMessages);



export default router;