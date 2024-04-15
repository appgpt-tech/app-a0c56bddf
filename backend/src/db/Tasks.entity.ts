//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Tasks')
export class TasksEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  description: string;

  @Column('integer', { nullable: true })
  runnerCurrentLocation: number;

  @Column('text', { nullable: true })
  taskStatus: string;

  @Column('text', { nullable: true })
  pickupLocation: string;

  @Column('text', { nullable: true })
  deliveryLocation: string;

  @Column('date', { nullable: true })
  estimatedPickupTime: Date;

  @Column('date', { nullable: true })
  estimatedDeliveryTime: Date;

  @Column('text', { nullable: true })
  itemDescription: string;
}