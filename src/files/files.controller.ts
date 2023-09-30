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

@ApiTags('Files - Get and Upload')
@Controller('files')
export class FilesController {
  constructor(
    private readonly imageUploadService: ImageUploadService,
    private readonly configService: ConfigService,
  ) {}

  @Get('product/:imageName')
  findProductImage(@Param('imageName') imageName: string) {
    return this.imageUploadService.getImage(imageName);
  }

  @Post('product')
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: fileFilter,
    }),
  )
  uploadProductImage(@UploadedFile() file: BufferedFile) {
    return this.imageUploadService.uploadImage(file);
  }
}
