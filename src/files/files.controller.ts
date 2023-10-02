import {
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { ImageUploadService } from './image-upload.service';
import { fileFilter } from './helpers';
import { FileInterceptor } from '@nestjs/platform-express';
import { BufferedFile } from '../minio-client/dto/file.model';

@ApiTags('Files - Upload')
@Controller('files')
export class FilesController {
  constructor(
    private readonly imageUploadService: ImageUploadService
  ) {}

  @Post('product')
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: fileFilter,
    }),
  )
  uploadProductImage(@UploadedFile() file: BufferedFile, @Param('uuidProduct') uuidProduct: string) {
    return this.imageUploadService.uploadImage(file, uuidProduct);
  }
}
