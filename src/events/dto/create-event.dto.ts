import {
  IsString,
  IsEnum,
  IsOptional,
  IsDateString,
  IsInt,
  Min,
  MaxLength,
} from 'class-validator';
import { EventType } from '../entities/event.entity';

export class CreateEventDto {
  @IsString()
  @MaxLength(150)
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(EventType)
  type: EventType;

  @IsOptional()
  @IsString()
  category?: string;

  @IsString()
  location: string;

  @IsDateString()
  startDate: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  capacity?: number;
}