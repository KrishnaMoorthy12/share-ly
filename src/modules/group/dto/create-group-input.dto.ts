import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateGroupInputDto {
  @ApiProperty({ example: 'FF3 Room rentals' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional({ example: 'This is the rental share group of FF3' })
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty()
  @IsArray()
  @IsNotEmpty()
  members: string[];
}
