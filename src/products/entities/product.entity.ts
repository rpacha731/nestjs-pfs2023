import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { ProductImage } from './';
import { User } from '../../auth/entities/user.entity';

@Entity({ name: 'products' })
export class Product {
  @ApiProperty({
    example: 'cd533345-f1f3-48c9-a62e-7dc2da50c8f8',
    description: 'Product ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'Camiseta de Tesla',
    description: 'Product name',
    uniqueItems: true,
  })
  @Column('text', {
    unique: true,
  })
  name: string;

  @ApiProperty({
    example: 0,
    description: 'Precio del producto',
  })
  @Column('float', {
    default: 0,
  })
  price: number;

  @ApiProperty({
    example: 'La mejor camiseta de Tesla',
    description: 'Product description',
    default: null,
  })
  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;

  @ApiProperty({
    example: 10,
    description: 'Product stock',
    default: 0,
  })
  @Column('int', {
    default: 0,
  })
  stock: number;

  @ApiProperty()
  @OneToMany(() => ProductImage, (productImage) => productImage.product, {
    cascade: true,
    eager: true,
  })
  images?: ProductImage[];

  @ManyToOne(() => User, (user) => user.product, { eager: true })
  user: User;
}
