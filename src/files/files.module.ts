import { Module } from '@nestjs/common';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';
import { ConfigModule } from '@nestjs/config';
import { ImageUploadService } from './image-upload.service';
import { MinioClientModule } from '../minio-client/minio-client.module';

@Module({
  controllers: [FilesController],
  providers: [FilesService, ImageUploadService],
  imports: [ConfigModule, MinioClientModule],
  exports: [FilesService, ImageUploadService]
})
export class FilesModule {}
