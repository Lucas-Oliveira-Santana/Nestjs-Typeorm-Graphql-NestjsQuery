import { BasesEntity } from '../../bases/entities/base.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { Student } from '../../students/entities/student.entity';

@Entity()
export class Discipline extends BasesEntity {
  @Column()
  name: string;

  @ManyToMany(() => Student, (students) => students.disciplines, {
    nullable: true,
  })
  @JoinTable()
  students: Student;
}
