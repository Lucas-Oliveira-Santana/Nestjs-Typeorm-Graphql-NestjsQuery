import { BasesEntity } from '../../bases/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Content extends BasesEntity {
  @Column()
  description: string;
  @Column()
  linkContent: string;
}
