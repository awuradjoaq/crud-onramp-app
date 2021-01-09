import { Router } from 'express';
import { createMessage, retrieveMessages, removeMessages } from '../controllers/messages';

const router = Router();

router.post('/', createMessage);

router.get('/', retrieveMessages);

router.delete('/', removeMessages);

router.patch('/:id');

export default router;