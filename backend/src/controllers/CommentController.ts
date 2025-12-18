import { Request, Response } from 'express';
import { CommentService } from '../services/comment.service';

const service = new CommentService();

export class CommentController {
  static async create(req: Request, res: Response) {
    if (!req.body?.content)
      return res.status(400).json({ error: 'Content is required' });

    const result = await service.create(req.body.content);
    res.json(result);
  }

  static async list(req: Request, res: Response) {
    const comments = await service.findAll();
    res.json(comments);
  }
}
