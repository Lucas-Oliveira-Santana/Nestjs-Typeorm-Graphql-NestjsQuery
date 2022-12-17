import {
  FilterableField,
  FilterableRelation,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { LessonDTO } from '../../lessons/dto/lesson.dto';
import { BasesDTO } from '../../bases/dto/base.dto';

@ObjectType('Content')
@FilterableRelation('lesson', () => LessonDTO)
export class ContentDTO extends BasesDTO {
  @FilterableField()
  description: string;
  @FilterableField()
  linkContent?: string;
}
