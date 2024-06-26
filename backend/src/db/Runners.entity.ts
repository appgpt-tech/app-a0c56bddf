//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Runners')
export class RunnersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  fullName: string;

  @Column('text', { nullable: true })
  address: string;

  @Column('text', { nullable: true })
  phoneNumber: string;

  @Column('text', { nullable: true })
  location: string;

  @Column('integer', { nullable: true })
  formerTasks: number;

  @Column('integer', { nullable: true })
  currentTasks: number;

  @Column('text', { nullable: true })
  reviews: string;

  @Column('integer', { nullable: true })
  ranking: number;
}
