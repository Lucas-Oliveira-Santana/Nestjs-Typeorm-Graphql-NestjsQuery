import { CreateContentInput } from './create-content.input';
import { Field, ID, InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateContentInput extends PartialType(CreateContentInput) {
  @Field(() => ID, { nullable: true })
  id?: string;
}
