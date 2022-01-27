import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID as ObjectIdType, Repository } from 'typeorm';
import { CreateUserInputDto } from './dto/create-user.input.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly repo: Repository<User>) {}

  create(userDetails: CreateUserInputDto) {
    const user = this.repo.create(userDetails);
    return this.repo.save(user);
  }

  changeKey(userId: ObjectIdType, newKey: string) {
    return this.repo.update(userId, { key: newKey });
  }
}
