import { CreateStudentInput } from './create-student.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateStudentInput extends PartialType(CreateStudentInput) {
  @Field(() => String)
  name?: string;

  @Field(() => String)
  key?: string;
}
