import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BasesDTO } from '../../bases/dto/base.dto';

@ObjectType('Discipline')
export class DisciplineDTO extends BasesDTO {
  @FilterableField()
  name: string;
}
