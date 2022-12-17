import { BasesEntity } from '../../bases/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Lesson extends BasesEntity {
  @Column()
  description: string;
}
