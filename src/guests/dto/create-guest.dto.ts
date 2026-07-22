import {
  IsString,
  IsOptional,
  IsEmail,
  IsInt,
  Min,
  MaxLength,
} from 'class-validator';

export class CreateGuestDto {
  @IsString()
  @MaxLength(100)
  fullName: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  plusOnes?: number;

  @IsOptional()
  @IsString()
  notes?: string;
}