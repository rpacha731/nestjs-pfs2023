import { Module } from '@nestjs/common';
import { FilesController } from './files.controller';
import { ConfigModule } from '@nestjs/config';
import { ImageUploadService } from './image-upload.service';
import { MinioClientModule } from '../minio-client/minio-client.module';
import { ProductsService } from '../products/products.service';
import { ProductsModule } from '../products/products.module';

@Module({
  controllers: [FilesController],
  providers: [ImageUploadService, ProductsService],
  imports: [ConfigModule, MinioClientModule, ProductsModule],
  exports: [ImageUploadService]
})
export class FilesModule {}
