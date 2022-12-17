import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { StudentDTO } from '../../students/dto/student.dto';
import { BasesDTO } from '../../bases/dto/base.dto';

@ObjectType('Discipline')
@FilterableOffsetConnection('students', () => StudentDTO, {
  nullable: true,
})
export class DisciplineDTO extends BasesDTO {
  @FilterableField()
  name: string;
}
