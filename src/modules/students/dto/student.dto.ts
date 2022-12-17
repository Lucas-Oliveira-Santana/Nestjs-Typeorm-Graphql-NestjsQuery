import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { DisciplineDTO } from 'src/modules/discipline/dto/discipline.dto';
import { BasesDTO } from '../../bases/dto/base.dto';

@ObjectType('Student')
@FilterableOffsetConnection('discipline', () => DisciplineDTO, {
  nullable: true,
})
export class StudentDTO extends BasesDTO {
  @FilterableField()
  name: string;

  @FilterableField()
  key: string;
}
