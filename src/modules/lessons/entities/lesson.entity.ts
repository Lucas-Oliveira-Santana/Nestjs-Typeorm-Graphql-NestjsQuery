import { BasesEntity } from '../../bases/entities/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Content } from '../../contents/entities/content.entity';

@Entity()
export class Lesson extends BasesEntity {
  @Column()
  description: string;

  @OneToMany(() => Content, (contents) => contents.lesson)
  contents: Content[];
}
