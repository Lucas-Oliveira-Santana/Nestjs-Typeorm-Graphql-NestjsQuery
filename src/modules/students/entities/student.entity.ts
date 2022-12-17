import { Column, Entity } from 'typeorm';
import { BasesEntity } from '../../bases/entities/base.entity';

@Entity()
export class Student extends BasesEntity {
  @Column()
  key: string;

  @Column()
  name: string;
}
