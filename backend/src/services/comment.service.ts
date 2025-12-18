import { AppDataSource } from '../data-source';
import { Comment } from '../entities/Comment';

export class CommentService {
  private repo = AppDataSource.getRepository(Comment);

  async create(content: string) {
    const c = this.repo.create({ content });
    await this.repo.save(c);
    return c;
  }

  async findAll() {
    return await this.repo.find({ order: { id: 'DESC' } });
  }
}
