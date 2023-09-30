import { Module } from '@nestjs/common';
import { MinioClientService } from './minio-client.service';
import { MinioModule } from 'nestjs-minio-client';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MinioModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        endPoint: process.env.MINIO_ENDPOINT,
        port: +process.env.MINIO_PORT,
        useSSL: false,
        accessKey: process.env.MINIO_ACCESS_KEY,
        secretKey: process.env.MINIO_SECRET_KEY,
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [MinioClientService],
  exports: [MinioClientService],
})
export class MinioClientModule {}
