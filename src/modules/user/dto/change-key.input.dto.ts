import { IsString } from 'class-validator';

export class ChangeKeyInputDto {
  @IsString()
  readonly key: string;

  @IsString()
  readonly userId: string;
}
