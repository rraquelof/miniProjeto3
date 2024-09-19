import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SeriesModule } from './series/series.module';
import { CacheModule } from '@nestjs/cache-manager';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    CacheModule.register(),
    SeriesModule,
      ServeStaticModule.forRoot({
        rootPath: join(__dirname, '..', 'public'),
      }),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
