import { BasesEntity } from '../../bases/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Discipline extends BasesEntity {
  @Column()
  name: string;
}
