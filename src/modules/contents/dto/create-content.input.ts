import { Field, InputType } from '@nestjs/graphql';
import { UpdateLessonInput } from '../../lessons/dto/update-lesson.input';

@InputType()
export class CreateContentInput {
  @Field(() => String, { nullable: true })
  description: string;
  @Field(() => String, { nullable: true })
  linkContent?: string;
  @Field(() => String)
  lessonId?: string;
}
