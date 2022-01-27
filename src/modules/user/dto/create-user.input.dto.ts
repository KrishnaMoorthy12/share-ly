import { IsString } from 'class-validator';

export class CreateUserInputDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly key: string;
}
