import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BasesDTO } from '../../bases/dto/base.dto';

@ObjectType('Lesson')
export class LessonDTO extends BasesDTO {
  @FilterableField()
  description: string;
}
