import { Injectable } from '@nestjs/common';
import { MinioClientService } from 'src/minio-client/minio-client.service';
import { BufferedFile } from '../minio-client/dto/file.model';


@Injectable()
export class ImageUploadService {
  constructor(private minioClientService: MinioClientService) {}

  async uploadImage(image: BufferedFile) {
    const uploaded_image = await this.minioClientService.upload(image);

    return {
      image_url: uploaded_image.url,
      message: 'Imagen subida correctamente',
    };
  }

  async getImage(image_name: string) {
    const image = await this.minioClientService.get(image_name)

    return {
      image_url: image.url,
      message: 'Imagen obtenida correctamente',
    };
  }
}
