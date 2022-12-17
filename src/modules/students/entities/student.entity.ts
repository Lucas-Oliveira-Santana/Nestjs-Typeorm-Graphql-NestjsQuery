import { Discipline } from '../../discipline/entities/discipline.entity';
import { Column, Entity, ManyToMany } from 'typeorm';
import { BasesEntity } from '../../bases/entities/base.entity';

@Entity()
export class Student extends BasesEntity {
  @Column()
  key: string;

  @Column()
  name: string;

  @ManyToMany(() => Discipline, (disciplines) => disciplines.students, {
    nullable: true,
  })
  disciplines: Discipline[];
}
