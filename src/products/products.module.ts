import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { Product, ProductImage } from './entities';

@Module({
  providers: [ProductsService],
  controllers: [ProductsController],
  imports: [
    TypeOrmModule.forFeature([ Product, ProductImage ]),
    AuthModule,
  ],
  exports: [
    ProductsService,
    TypeOrmModule,
  ]
})
export class ProductsModule {}
