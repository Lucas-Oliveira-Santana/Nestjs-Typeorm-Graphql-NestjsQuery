import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BasesDTO } from '../../bases/dto/base.dto';

@ObjectType('Student')
export class StudentDTO extends BasesDTO {
  @FilterableField()
  name: string;

  @FilterableField()
  key: string;
}
