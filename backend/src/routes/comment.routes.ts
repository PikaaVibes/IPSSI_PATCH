import { Router } from 'express';
import { CommentController } from '../controllers/comment.controller';

const router = Router();

router.post('/comment', CommentController.create);
router.get('/comments', CommentController.list);

export default router;
