import { ApiPropertyOptional } from '@nestjs/swagger';

export class QueryDto {
  @ApiPropertyOptional()
  IndexQuery?: string;
  @ApiPropertyOptional()
  filter?: string;
  @ApiPropertyOptional()
  sort?: string;
  @ApiPropertyOptional()
  statusChange?: string;
}
