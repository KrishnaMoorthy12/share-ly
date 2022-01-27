import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsString } from 'class-validator';
import { ObjectID as ObjectIdType } from 'typeorm';

export class ChangeKeyInputDto {
  @ApiProperty({ example: 'WareWolf#254' })
  @IsString()
  readonly key: string;

  @ApiProperty({ type: String, format: 'hexadecimal', example: '507f1f77bcf86cd799439011' })
  @IsMongoId()
  readonly userId: ObjectIdType;
}
