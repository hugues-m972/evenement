import { IsString, IsOptional, IsEmail, MaxLength } from 'class-validator';

export class CreateRegistrationDto {
  @IsString()
  @MaxLength(100)
  fullName: string;

  @IsString()
  phone: string;

  @IsOptional()
  @IsEmail()
  email?: string;
}