import { IsEnum, IsOptional, IsInt, Min } from 'class-validator';
import { RsvpStatus } from '../entities/guest.entity';

export class RespondRsvpDto {
  @IsEnum(RsvpStatus)
  rsvpStatus: RsvpStatus;

  @IsOptional()
  @IsInt()
  @Min(0)
  plusOnes?: number;
}