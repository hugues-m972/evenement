import {
  IsString,
  IsOptional,
  IsEmail,
  IsNumber,
  Min,
  IsEnum,
  MaxLength,
} from 'class-validator';
import { VendorStatus } from '../entities/vendor.entity';

export class CreateVendorDto {
  @IsString()
  @MaxLength(100)
  name: string;

  @IsString()
  @MaxLength(100)
  service: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsNumber()
  @Min(0)
  agreedAmount: number;

  @IsOptional()
  @IsEnum(VendorStatus)
  status?: VendorStatus;

  @IsOptional()
  @IsString()
  notes?: string;
}