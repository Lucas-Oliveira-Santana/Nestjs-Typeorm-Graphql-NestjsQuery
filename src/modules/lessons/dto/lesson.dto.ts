import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { ContentDTO } from '../../contents/dto/content.dto';
import { BasesDTO } from '../../bases/dto/base.dto';

@ObjectType('Lesson')
@FilterableOffsetConnection('contents', () => ContentDTO, { nullable: true })
export class LessonDTO extends BasesDTO {
  @FilterableField()
  description: string;
}

//Relation when is a One To One/many
//Connection when is a ManyToOne
