import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

const service = new UserService();

export class UserController {
  static async populate(req: Request, res: Response) {
    const result = await service.populateRandomUsers();
    res.json({ message: result });
  }

  static async list(req: Request, res: Response) {
    const users = await service.getUsers();
    res.json(users);
  }
}
