import { Injectable } from '@nestjs/common';
import { MinioClientService } from 'src/minio-client/minio-client.service';
import { BufferedFile } from '../minio-client/dto/file.model';
import { ProductsService } from '../products/products.service';


@Injectable()
export class ImageUploadService {
  constructor(private minioClientService: MinioClientService,
              private productsService: ProductsService) {}

  async uploadImage(image: BufferedFile, uuidProduct: string) {
    const uploaded_image = await this.minioClientService.upload(image);

    await this.productsService.uploadImageToProduct(uploaded_image, uuidProduct)

    return {
      image_url: uploaded_image.url,
      message: 'Imagen subida correctamente',
    };
  }

}
