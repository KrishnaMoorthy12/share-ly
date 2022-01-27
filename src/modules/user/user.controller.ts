import { Body, Controller, Patch, Post } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { ChangeKeyInputDto } from './dto/change-key.input.dto';
import { CreateUserInputDto } from './dto/create-user.input.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async create(@Body() userDetails: CreateUserInputDto) {
    const user = await this.userService.create(userDetails);
    return { message: 'User created successfully', result: user };
  }

  @Patch('change-key')
  async changeKey(@Body() { key, userId }: ChangeKeyInputDto) {
    const user = await this.userService.changeKey(ObjectId(userId), key);
    return { message: 'User key changed successfully', result: user.raw };
  }
}
