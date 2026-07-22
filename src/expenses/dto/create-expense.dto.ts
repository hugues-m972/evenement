import {
  IsString,
  IsOptional,
  IsNumber,
  Min,
  IsDateString,
  IsUUID,
  MaxLength,
} from 'class-validator';

export class CreateExpenseDto {
  @IsString()
  @MaxLength(150)
  label: string;

  @IsNumber()
  @Min(0)
  amount: number;

  @IsDateString()
  date: string;

  @IsOptional()
  @IsUUID()
  vendorId?: string;
}