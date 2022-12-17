import { CreateDisciplineInput } from './create-discipline.input';
import { Field, ID, InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDisciplineInput extends PartialType(CreateDisciplineInput) {
  @Field(() => ID, { nullable: true })
  id?: string;
}
