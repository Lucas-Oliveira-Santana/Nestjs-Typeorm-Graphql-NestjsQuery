import { BasesEntity } from '../../bases/entities/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Lesson } from '../../lessons/entities/lesson.entity';

@Entity()
export class Content extends BasesEntity {
  @Column()
  description: string;
  @Column({ nullable: true })
  linkContent: string;

  @ManyToOne(() => Lesson)
  lesson: Lesson;

  @Column({ nullable: true })
  lessonId: string;
}
