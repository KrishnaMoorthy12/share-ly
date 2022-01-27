import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserInputDto {
  @ApiProperty({ example: 'Krish' })
  @IsString()
  readonly name: string;

  @ApiProperty({ example: 'akrishnamoorthy007@email.com' })
  @IsString()
  readonly email: string;

  @ApiProperty({ example: 'WareWolf#254' })
  @IsString()
  readonly key: string;
}
