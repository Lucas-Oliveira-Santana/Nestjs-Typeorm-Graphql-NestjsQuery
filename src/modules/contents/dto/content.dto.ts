import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BasesDTO } from '../../bases/dto/base.dto';

@ObjectType('Content')
export class ContentDTO extends BasesDTO {
  @FilterableField()
  description: string;
  @FilterableField()
  linkContent: string;
}
