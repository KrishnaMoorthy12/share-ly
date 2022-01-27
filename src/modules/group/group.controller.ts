import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { routes } from '../../constants/routes.constants';
import { CreateGroupInputDto } from './dto/create-group-input.dto';
import { GroupService } from './group.service';

@Controller(routes.group.root)
@ApiTags(routes.group.docs.tag)
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post(routes.group.subRoutes.create)
  async create(@Body() groupDetails: CreateGroupInputDto) {
    const group = await this.groupService.create(groupDetails);
    return { message: 'Group created successfully', result: group };
  }
}
