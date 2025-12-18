import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

const router = Router();

router.get('/populate', UserController.populate);
router.get('/users', UserController.list);

export default router;
