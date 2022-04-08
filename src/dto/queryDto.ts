import { isString, IsString } from 'class-validator';

export interface QueryDto {
  //   @IsString()
  IndexQuery?: string;
  //   @IsString()
  filter?: string;
  //   @IsString()
  sort?: string;
  //   @IsString()
  statuChange?: string;
}
