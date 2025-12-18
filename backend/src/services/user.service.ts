import { AppDataSource } from '../data-source';
import { User } from '../entities/User';
import axios from 'axios';
import bcrypt from 'bcrypt';

export class UserService {
  private userRepo = AppDataSource.getRepository(User);

  async populateRandomUsers() {
    const responses = await Promise.all([
      axios.get('https://randomuser.me/api/'),
      axios.get('https://randomuser.me/api/'),
      axios.get('https://randomuser.me/api/'),
    ]);

    const users = responses.map(r => r.data.results[0]);
    for (const u of users) {
      const name = `${u.name.first} ${u.name.last}`;
      const password = await bcrypt.hash(u.login.password, 10);
      const user = this.userRepo.create({ name, password });
      await this.userRepo.save(user);
    }
    return 'Inserted 3 secure users';
  }

  async getUsers() {
    return await this.userRepo.find({ select: ['id', 'name'] });
  }
}
