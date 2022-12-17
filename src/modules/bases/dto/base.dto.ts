import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
@ObjectType()
export class BasesDTO {
  @FilterableField()
  id: string;

  @FilterableField()
  updatedAt: Date;

  @FilterableField()
  createdAt: Date;

  @FilterableField()
  deletedAt: Date;
}
