import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TaskDb {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  status: boolean;
  @Column()
  date: Date;
}
