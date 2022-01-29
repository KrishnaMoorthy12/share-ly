import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGroupInputDto } from './dto/create-group-input.dto';
import { Group } from './group.entity';

@Injectable()
export class GroupService {
  constructor(@InjectRepository(Group) private readonly repo: Repository<Group>) {}

  async create(groupDetails: CreateGroupInputDto) {
    const { members: pending, ...rest } = { ...groupDetails };
    const group = this.repo.create({ ...rest, pending });
    return this.repo.save(group);
  }
}
