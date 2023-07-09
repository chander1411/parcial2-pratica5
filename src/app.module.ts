import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PracticaModule } from './practica/practica.module';

@Module({
  imports: [PracticaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
