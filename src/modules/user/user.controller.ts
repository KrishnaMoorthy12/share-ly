import { Body, Controller, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ObjectId } from 'mongodb';
import { routes } from '../../constants/routes.constants';
import { ChangeKeyInputDto } from './dto/change-key.input.dto';
import { CreateUserInputDto } from './dto/create-user.input.dto';
import { UserService } from './user.service';

@Controller(routes.user.root)
@ApiTags(routes.user.docs.tag)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post(routes.user.subRoutes.create)
  async create(@Body() userDetails: CreateUserInputDto) {
    const user = await this.userService.create(userDetails);
    return { message: 'User created successfully', result: user };
  }

  @Patch(routes.user.subRoutes.changeKey)
  async changeKey(@Body() { key, userId }: ChangeKeyInputDto) {
    const user = await this.userService.changeKey(ObjectId(userId), key);
    return { message: 'User key changed successfully', result: user.raw };
  }
}
