import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  genre: string;

  @Column()
  classification?: number;

  @Column()
  resume?: string;
}
